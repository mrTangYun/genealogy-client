<template>
  <div
    :class="{
      user: true,
      sigleChild: user && user.children && user.children.length === 1
    }"
  >
    <div v-if="$apollo.loading">loading</div>
    <template v-else>
      <div class="name">
        <span>{{ user.name }}</span>
      </div>
      <template v-if="user.children && user.children.length > 0">
        <div
          :class="{
            children: true,
            sigleChild: user.children.length === 1
          }"
        >
          <component-user
            v-for="user in user.children"
            :key="user.id"
            :id="user.id"
          />
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import gql from "graphql-tag";
import { Button } from "vant";
export default {
  name: "component-user",
  components: {
    Button
  },
  apollo: {
    // 简单的查询，将更新 'hello' 这个 vue 属性
    user: {
      query: gql`
        query QueryUser($userId: String!) {
          user(userId: $userId) {
            id
            name
            gender
            parents {
              id
              name
              gender
            }
            mate {
              id
              name
              gender
            }
            children {
              id
              name
              gender
            }
          }
        }
      `,
      variables() {
        console.log(this.id);
        return {
          userId: this.id
        };
      }
    }
  },
  props: {
    msg: String,
    id: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$unitHeight: 0.5em;
.user {
  margin: $unitHeight 0;
  position: relative;
  &::before {
    content: " ";
    display: flex;
    height: $unitHeight;
    width: 1px;
    background: currentColor;
    left: 50%;
    position: absolute;
    top: -$unitHeight;
  }

  &::after {
    content: " ";
    display: block;
    width: 100%;
    height: 1px;
    background: currentColor;
    position: absolute;
    top: -$unitHeight;
    left: 0;
  }

  &:first-child {
    margin-left: 0;
    &::after {
      width: 50%;
      left: 50%;
    }
  }
  &:last-child {
    margin-right: 0;
    &::after {
      width: 50%;
    }
    &:first-child {
      &::after {
        width: 0;
      }
    }
  }

  .name {
    display: flex;
    justify-content: center;
    padding: 0 $unitHeight / 3;
    span {
      display: block;
      color: #333;
      border: 1px solid #333;
      white-space: nowrap;
      border-radius: 5px;
      min-width: 4em;
    }
  }
  .children {
    position: relative;
    display: flex;
    padding-top: $unitHeight;
    &::before {
      content: " ";
      display: flex;
      height: $unitHeight;
      width: 1px;
      position: absolute;
      background: currentColor;
      left: 50%;
      top: -0;
    }
    // &::after {
    //   content: " ";
    //   display: flex;
    //   height: 1px;
    //   width: 100%;
    //   position: absolute;
    //   background: currentColor;
    // }
    // &.sigleChild {
    //   &::after {
    //     width: 0px;
    //     background: red;
    //   }
    // }
    // &::after {
    // }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
