<template>
  <PullRefresh v-model="isLoading" @refresh="onRefresh">
    <Search
      v-model="keywords"
      background="#2A363B"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      :show-action="!!keywords.length"
    >
      <template #action>
        <div class="btn-show-all" size="small" @click="onCancel">全部</div>
      </template>
    </Search>
    <div class="genealogyNode" ref="space"></div>
  </PullRefresh>
</template>

<script>
import { PullRefresh, Search, Button } from "vant";
import data_origin from "../data";
import { v4 as uuidv4 } from "uuid";
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
      isLoading: false,
      keywordsTmp: "",
      myChart: null,
      flatData: [],
      searchResultData: [],
      data_origin_withId: null
    };
  },
  computed: {
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
  mounted: function() {
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

  beforeDestroy: function() {
    window.removeEventListener("resize", this.onResizeHandler);
  },
  methods: {
    generateOption() {
      this.data_origin_withId =
        this.data_origin_withId || this.filterNode(data_origin);
      const data = this.filterNode(this.data_origin_withId);
      return {
        backgroundColor: "#2A363B",
        label: {
          formatter: function(params) {
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

          formatter: function(params) {
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
            // var prevPrice = params.data;
            return result.join("<br />");
          }
        },
        series: [
          {
            type: "tree",

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
    onResizeHandler: function() {
      this.myChart && this.myChart.resize();
    },
    onRefresh: function() {
      const { origin, pathname, hash } = window.location;
      window.location.href = `${origin}${pathname}?t=${Math.ceil(
        Math.random() * 100000000
      )}/${hash}`;
    },
    filterNode: function(node, parentPath) {
      const result = { ...node };
      if (!node.id) {
        result.id = uuidv4();
        (result.path = [...(parentPath || []), result.id]),
          this.flatData.push({
            id: result.id,
            name: result.name,
            path: result.path
          });
      }
      if (this.searchResultData.length) {
        if (
          this.searchResultData.some(({ path }) => {
            return path.some(id => id === result.id);
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
        result.children = result.children.map(node =>
          this.filterNode(node, result.path)
        );
      }
      return result;
    }
  }
};
</script>

<style lang="scss" scoped>
.genealogyNode {
  height: 100vh;
  // background: red;
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
</style>
