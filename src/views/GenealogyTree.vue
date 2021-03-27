<template>
  <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <Search
      v-model="keywords"
      background="#2A363B"
      placeholder="请输入搜索名字"
      @search="onSearch"
      @cancel="onCancel"
      show-action
    >
      <template #action>
        <div class="nav-action-btns">
          <div
            v-if="!!keywords.length"
            class="btn-show-all btn"
            size="small"
            @click="onCancel"
          >
            全部
          </div>
          <div class="btn-show-all btn" size="small" @click="showSlider = true">
            {{ me ? me.name : "设置" }}
          </div>
        </div>
      </template>
    </Search>
    <div class="genealogyNode" ref="space"></div>
    <van-popup
      :lock-scroll="true"
      v-model="showSlider"
      closeable
      position="right"
      :style="{ width: '80%', height: '100%', background: '#99B898' }"
    >
      <div class="chooseArea" v-if="!me">
        <div class="h2">请输入您的姓名</div>
        <van-field
          input-align="center"
          clearable
          class="inputName"
          v-model="myNameInput"
          placeholder="请输入您的姓名"
        />
        <van-list class="myList">
          <van-cell
            class="people"
            v-for="item in myNameList"
            :key="item.id"
            :title="item.name"
          >
            <!-- <template>
                <van-button size="mini" type="warning">主要按钮</van-button>
              </template> -->
            <template #title>
              <div class="item">
                <div>
                  <div>
                    <span class="name">{{ item.name }}</span>

                    <span class="gender">{{
                      ["男", "女"][item.gender - 1]
                    }}</span>
                    <span v-if="!!item.bday" class="bday">{{ item.bday }}</span>
                  </div>
                  <div v-if="!!item.addr" class="addr">{{ item.addr }}</div>
                </div>
                <van-button
                  @click="
                    me = item;
                    showSlider = false;
                    myNameInput = '';
                  "
                  color="#FF847C"
                  round
                  size="small"
                  >确定</van-button
                >
              </div>
            </template>

            <template #label>
              <span class="parent" v-if="item.parent"
                >{{ ["父亲", "母亲"][item.parent.gender - 1] }}:{{
                  item.parent.name
                }}</span
              >
            </template>
            <!-- <template #right-icon>
                <van-icon name="search" class="search-icon" />
              </template> -->
          </van-cell>
        </van-list>
      </div>
      <div class="chooseArea2" v-else>
        <div class="h2">我是{{ me.name }}</div>
        <div class="item">
          <div>
            <div>
              <span class="gender">{{ ["男", "女"][me.gender - 1] }} </span>
              <span v-if="!!me.bday" class="bday"> {{ me.bday }}</span>
            </div>
            <div v-if="!!me.addr" class="addr">{{ me.addr }}</div>
          </div>
        </div>
        <van-button
          @click="
            me = null;
            myNameInput = '';
          "
          block
          color="#FF847C"
          size="big"
          >我不是{{ me.name }}, 重新设置</van-button
        >
      </div>
    </van-popup>
  </PullRefresh>
</template>

<script>
import { PullRefresh, Search, Button } from "vant";
import data_origin from "../data";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
const echarts = window.echarts;
export default {
  components: {
    PullRefresh,
    Search,
    Button
  },
  name: "OrganizationChart",

  data() {
    return {
      showSlider: false,
      myNameInput: "",
      isLoading: false,
      keywordsTmp: "",
      myChart: null,
      flatData: [],
      searchResultData: [],
      data_origin_withId: null,
      me: null
    };
  },
  computed: {
    myNameList: function () {
      const keyword = this.myNameInput.trim();
      if (!keyword || keyword === "唐") return [];
      let result = this.flatData.filter(({ name, mate }) => {
        return (
          name.indexOf(keyword) > -1 ||
          (mate && mate.name.indexOf(keyword) > -1)
        );
      });
      // if (result.length > 1) {
      //   result.map((node) => {
      //     return {
      //       ...node,
      //       parent: this.findUserById(node.path[node.path.length - 2])
      //     };
      //   });
      // }
      result = result.map((node) => {
        if (node.path.length >= 2) {
          return {
            ...node,
            parent: this.findUserById(node.path[node.path.length - 2])
          };
        }
        return node;
      });
      console.log(result);
      return result;
    },
    keywords: {
      get() {
        return this.keywordsTmp;
      },
      set(val) {
        this.keywordsTmp = val;
        this.onSearch(val);
      }
    }
  },
  mounted: function () {
    const chartDom = this.$refs.space;
    this.myChart = echarts.init(chartDom);
    let option;

    this.myChart.showLoading();

    this.myChart.hideLoading();

    // this.myChart.setOption((option = this.generateOption()));
    option = this.generateOption();

    option && this.myChart.setOption(option);
    window.addEventListener("resize", this.onResizeHandler);
  },

  beforeDestroy: function () {
    window.removeEventListener("resize", this.onResizeHandler);
  },
  methods: {
    findUserById(id) {
      const index = this.flatData.findIndex(({ id: _id }) => _id === id);
      if (index > -1) {
        return this.flatData[index];
      }
      console.error(`没找到${id}的用户`);
    },
    getRelationship(a, b) {
      const relationships = this.getRelationships(a, b);
      if (relationships) {
        if (relationships.length > 1) {
          const lastChar = relationships[0].substring(
            relationships[0].length - 1
          );
          const lastChar2 = relationships[0].substring(
            relationships[0].length - 2
          );
          if (a.bday && b.bday) {
            if (
              ["兄", "弟", "姐", "妹"].some((c) => c === lastChar) &&
              ["兄", "弟", "姐", "妹"].some((c) => c !== lastChar2)
            ) {
              if (dayjs(a.bday).isBefore(dayjs(b.bday))) {
                return relationships[1];
              } else {
                return relationships[0];
              }
            }
          }

          return relationships;
        }
        return relationships[0];
      }
    },
    getRelationships(a, b) {
      if (a.id === b.id) return;
      const flatData = this.flatData;
      const { path: aPath } = a;
      const { path: bPath } = b;
      const aUser = a;
      let minI = Math.min(aPath.length, bPath.length);

      for (let i = 0; i < minI; i++) {
        if (aPath[i] !== bPath[i]) {
          minI = i;
        }
      }

      let renations = [];
      let isDirect = false;
      if (minI === Math.min(aPath.length, bPath.length)) {
        // 直系
        if (minI < bPath.length) {
          for (let i = minI; i < bPath.length; i++) {
            const currentUser = this.findUserById(bPath[i]);
            renations.push(["", "儿子", "女儿"][currentUser.gender]);
          }
          // console.log("hello", renations.join("的"));
          return window.relationship({
            text: renations.join("的"),
            sex: [0, 1, 0][aUser.gender]
          });
        } else {
          const currentUser = this.findUserById(aPath[minI - 1]);
          renations.push(["", "爸爸", "妈妈"][currentUser.gender]);
        }
      }
      let aFirstUser;
      for (let i = aPath.length - 1; i > minI - 1; i--) {
        if (aPath[i] !== a.id) {
          const currentUser = this.findUserById(aPath[i]);
          renations.push(["", "爸爸", "妈妈"][currentUser.gender]);
          aFirstUser = currentUser;
        }
      }
      // const currentUser = flatData.filter(({id}) => id === aPath[minI-1])[0];
      // renations.push(['', '爸爸','妈妈'][currentUser.gender]);
      for (let i = minI; i < bPath.length; i++) {
        const currentUser = this.findUserById(bPath[i]);
        if (minI === i) {
          if (currentUser.gender === 1) {
            if (currentUser.index < aUser.index) {
              renations.push("哥哥");
            } else {
              renations.push("弟弟");
            }
          } else if (currentUser.gender === 2) {
            if (currentUser.index < aUser.index) {
              renations.push("姐姐");
            } else {
              renations.push("妹妹");
            }
          }
        } else {
          renations.push(["", "儿子", "女儿"][currentUser.gender]);
        }
      }

      return window.relationship({
        text: renations.join("的"),
        sex: [0, 1, 0][aUser.gender]
      });
    },

    generateOption() {
      this.data_origin_withId =
        this.data_origin_withId || this.filterNode(data_origin);
      const data = this.filterNode(this.data_origin_withId);
      // console.log(JSON.stringify(this.filterNode2(data_origin)));
      return {
        // backgroundColor: "#2A363B",
        label: {
          formatter: function (params) {
            /* 这里 `params.data` 引用的是 `series[0].data[index]`，里面包含着“额外的数据” */
            // console.log(params.data.name);
            let result = "";
            const { name } = params.data;
            if ("唐芳𨥭" === name) {
              return ["芳", "𨥭"].join("\n");
            }
            result = name;
            if (name.length > 2) {
              result = params.data.name.replace("唐", "");
            }

            return result.split("").join("\n");
          }
        },
        tooltip: {
          // position: [0, 0],
          padding: 2,
          trigger: "item",
          triggerOn: "mousemove",

          formatter: (params) => {
            /* 这里 `params.data` 引用的是 `series[0].data[index]`，里面包含着“额外的数据” */
            // console.log({ ...params.data });
            const { name, mate, addr, bday, dday } = params.data;
            const result = [];

            let life = "";
            if (bday) {
              life = `(生于${bday})`;
              if (dday) {
                life = `(${bday}~${dday})`;
              }
            }
            result.push(name + (bday ? " " + life : ""));
            if (addr) {
              result.push(addr);
            }
            if (mate) {
              result.push("配偶: " + mate.name);
            }
            if (this.me) {
              const relationship = this.getRelationship(this.me, params.data);

              if (relationship) {
                result.push("称呼: " + relationship);
              }
            }

            // var prevPrice = params.data;
            return result.join("<br />");
          }
        },
        series: [
          {
            type: "tree",
            emphasis: {
              focus: "ancestor",
              blurScope: "coordinateSystem"
            },
            data: [data],

            left: "2%",
            right: "2%",
            top: "8%",
            bottom: "20%",
            symbol: "emptyCircle",
            symbolSize: 15,
            orient: "vertical",
            expandAndCollapse: !this.searchResultData.length,
            label: {
              position: "top",
              rotate: 0,
              verticalAlign: "middle",
              align: "right",
              fontSize: 19
            },

            leaves: {
              label: {
                position: "bottom",
                rotate: 0,
                verticalAlign: "middle",
                align: "left"
              }
            },

            animationDurationUpdate: 750
          }
        ]
      };
    },
    onClear() {
      console.log("onClear");
      this.keywords = "";
    },
    onCancel() {
      console.log("onCancel");
      this.keywords = "";
    },
    onSetting() {
      this.$router.push("/setting");
    },
    onSearch(val) {
      this.searchResultData = [];
      // console.log("val", val);
      if (val) {
        try {
          const _keywords = val.trim();
          if (_keywords && _keywords !== "唐") {
            this.searchResultData = this.flatData.filter(
              ({ name }) => name.indexOf(val.trim()) > -1
            );
          }
        } catch (error) {}
      }
      this.myChart.setOption(this.generateOption());
    },
    onResizeHandler: function () {
      this.myChart && this.myChart.resize();
    },
    onRefresh: function () {
      const { origin, pathname, hash } = window.location;
      window.location.href = `${origin}${pathname}?t=${Math.ceil(
        Math.random() * 100000000
      )}/${hash}`;
    },
    filterNode: function (node, parentPath) {
      const result = { ...node };
      if (!node.path) {
        result.id = uuidv4();
        result.path = [...(parentPath || []), result.id];
        const user = {
          ...result,
          id: result.id,
          path: result.path,
          index: this.flatData.length
        };
        // window.flatData = this.flatData;

        this.flatData.push(user);
      }
      if (this.searchResultData.length) {
        if (
          this.searchResultData.some(({ path }) => {
            return path.some((id) => id === result.id);
          })
        ) {
          result.collapsed = false;
        } else {
          result.collapsed = true;
        }
      } else {
        // result.collapsed = true;
      }
      if (node.gender) {
        result.itemStyle = {
          color: ["", "#99B898", "#E84A5F"][node.gender]
        };
        result.lineStyle = {
          color: ["", "#99B898", "#E84A5F"][node.gender]
        };
      }
      if (node.children) {
        result.children = result.children.map((node) =>
          this.filterNode(node, result.path)
        );
      }
      return result;
    },
    filterNode2: function (node, parentPath) {
      const result = { ...node };
      if (!node.path) {
        result.id = uuidv4();
      }

      if (node.children) {
        result.children = result.children.map((node) => this.filterNode2(node));
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.genealogyNode {
  height: 100vh;
  background: #2a363b;
}
.nav-action-btns {
  display: flex;
  .btn {
    background: #ff847c;
    font-size: 0.875em;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
    border-radius: 2px;
    color: #fff;
    margin-right: 0.3em;
    &:last-child {
      margin-right: 0;
    }
  }
}
.btn-show-all {
  background: #ff847c;
  font-size: 0.875em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  border-radius: 2px;
  color: #fff;
}
.people {
  text-align: left;
  .name {
    font-size: 2em;
    padding-right: 0.3em;
  }
  .item {
    display: flex;
    justify-content: space-between;
  }
}
.chooseArea {
  color: #fff;
  .h2 {
    font-size: 1.5em;
    margin: 50px 0 10px;
  }
  .inputName {
    height: 2em;
    font-size: 2em;
  }
  .myList {
    background: #99b898;
  }
}

.chooseArea2 {
  color: #fff;
  padding: 0 1em;
  .h2 {
    font-size: 1.5em;
    margin: 50px 0 10px;
  }
  .inputName {
    height: 2em;
    font-size: 2em;
  }
  .myList {
    background: #99b898;
  }
  .item {
    margin: 1em auto;
  }
}
</style>
