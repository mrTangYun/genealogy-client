<template>
  <div class="home">
    <vue-tree
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
    </vue-tree>
  </div>
</template>

<script>
import VueTree from "@ssthouse/vue-tree-chart";
import { v4 as uuidv4 } from "uuid";
import Vue from "vue";
export default {
  name: "OrganizationChart",
  components: {
    VueTree
  },
  data() {
    return {
      sampleData: {
        value: "1",
        mates: [
          {
            name: "唐"
          }
        ],
        children: [
          { value: "2", children: [{ value: "4" }, { value: "5" }] },
          { value: "3" }
        ]
      },
      treeConfig: { nodeWidth: 220, nodeHeight: 80, levelHeight: 50 }
    };
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
