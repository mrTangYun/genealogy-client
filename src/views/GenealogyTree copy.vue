<template>
  <div class="home">
    <template v-if="!$apollo.loading">
      <div v-for="genealogy in genealogies" :key="genealogy.id">
        <div v-if="genealogy.topAncestors && genealogy.topAncestors.length">
          {{ genealogy.firstName }}
          <div class="children">
            <User
              v-for="user in genealogy.topAncestors"
              :key="user.id"
              :id="user.id"
            />
          </div>
        </div>
      </div>
      <div ref="treeNode"></div>
    </template>
    <!-- <vue-tree
      style="width: 800px; height: 600px; border: 1px solid gray;"
      :dataset="sampleData"
      :config="treeConfig"
    >
      <template v-slot:node="{ node, collapsed }">
        <div class="tree-node">
          <span
            class="main"
            :style="{ border: collapsed ? '2px solid grey' : '' }"
            @click="clickNodeHandler(node)"
            >{{ node.value }}</span
          >
          <template v-if="node.mates && node.mates.length">
            <div
              class="mate"
              v-for="mate in node.mates"
              :key="mate.name"
              @click.stop="clickNodeHandler2(node)"
            >
              {{ mate.name }}
            </div>
          </template>
        </div>
      </template>
    </vue-tree> -->
  </div>
</template>

<script>
import * as echarts from "echarts";
import VueTree from "@ssthouse/vue-tree-chart";
import { v4 as uuidv4 } from "uuid";
import Vue from "vue";
import User from "@/components/User.vue";
import gql from "graphql-tag";
export default {
  name: "OrganizationChart",
  apollo: {
    // 简单的查询，将更新 'hello' 这个 vue 属性
    genealogies: gql`
      query {
        genealogies {
          id
          firstName
          maxLevel
          topAncestors {
            id
            name
            gender
          }
        }
      }
    `
  },
  components: {
    VueTree,
    User
  },
  data() {
    return {};
  },
  methods: {
    clickNodeHandler(a) {
      console.log(a);
    },
    clickNodeHandler2(a) {
      console.log({ ...a });
      this.$set(a.children, a.children.length, {
        _key: uuidv4(),
        value: Math.random() * 1000000,
        _children: null,
        children: null
      });
      // a.children =
      a.mates[0].name = "hello";
      // a = {
      //   ...a,
      //   children: [...a.children, { _key: uuidv4(), value: "30" }]
      // };
      console.log({ ...a });
      // a.children.push({ value: "30" });
      // a.children.splice(1, 0, { value: "30" });
    }
  }
};
</script>

<style lang="scss" scoped>
.children {
  display: flex;
}
.tree-node {
  color: blue;
  display: flex;
  .main,
  .mate {
    background: #fff;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main {
    border: 1px solid #333;
  }
  .mate {
    color: red;
    border: 1px solid #333;
    margin-left: 10px;
  }
}
</style>
