import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";
const apolloClient = new ApolloClient({
  // 你需要在这里使用绝对路径
  uri: "http://localhost:4000/graphql"
});

Vue.use(VueApollo);
Vue.config.productionTip = false;

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
