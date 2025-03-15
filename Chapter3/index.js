import ComponentA from "./components/ComponentA.js";

const app = Vue.createApp({
  components: {
    ComponentA,
  },
});

app.component("WordCount", {
  template:`
    <div class="block">
      <input type="text" v-model="content" />
      <p>你一共輸入 {{ count }} 個字符</p>
    </div>
  `,
  data() {
    return {
      content: '',
    };
  },
  computed: {
    count() {
      return this.content.length;
    }
  }
});

const vm = app.mount("#app");