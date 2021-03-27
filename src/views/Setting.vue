<template>
  <div class="settingPage">
    <van-nav-bar
      title="设置"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div>
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
          </div>
        </template>
      </Search>
      <div>
        <van-list>
          <van-cell
            class="people"
            v-for="item in flatData"
            :key="item.id"
            :title="item.name"
            value="内容"
          />
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast, Search } from "vant";

import data_origin from "../data";
export default {
  components: {
    Search
    // Button
  },
  data() {
    return {
      isLoading: false,
      keywordsTmp: "",
      myChart: null,
      flatData: [],
      searchResultData: [],
      data_origin_withId: null,
      me: null
    };
  },
  mounted: function () {
    this.filterNode2(data_origin);
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      Toast("按钮");
    },
    onCancel() {
      console.log("onCancel");
      this.keywords = "";
    },
    // onSetting(){
    //   this.$router.push('/setting')
    // },
    onSearch(val) {},
    filterNode2: function (node, parentPath) {
      const result = { ...node };

      this.flatData.push(result);
      if (node.children) {
        result.children = result.children.map((node) => this.filterNode2(node));
      }
      return result;
    }
  },
  computed: {
    keywords: {
      get() {
        return this.keywordsTmp;
      },
      set(val) {
        this.keywordsTmp = val;
        // this.onSearch(val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.settingPage {
  height: 100vh;
  background: #2a363b;
}
.people{
    background: #2a363b;
    color: #fff;
    text-align: left;
}
</style>