const app = Vue.createApp({
  data() {
    return {
      content: `<p>這是一段<span style="color: red">HTML</span>代碼</p>`,
      list: [1, 2, 3],
      attr: "placeholder",
      event: "change",
      value: "請輸入文字",
      todos: [
        {
          id: 1,
          content: "吃飯"
        },
        {
          id: 2,
          content: "洗澡"
        },
        {
          id: 3,
          content: "睡覺"
        }
      ],
      showTemp: false,
      comments: ["好", "非常好", "超級好"],
      comment: "",
      posts: [],
    }
  },
  computed: {
    
  },
  methods: {
    listIncrease() {
      this.list.push(this.list.length + 1);
    },
    handleChange() {
      console.log("input 變化");
    },
    handleClick(id, e) {
      alert(id + "," + e.clientX + "," + e.clientY);
    },
    showContent(content) {
      alert(content);
    },
    handleUlClick() {
      alert(0);
    },
    handleLiClick() {
      alert(1);
    },
    addComment() {
      this.comments.push(this.comment)
      this.comment = ''
    },
    async fetchPosts() {
      const res = await fetch("./posts.json");
      const postsData = await res.json();
      this.posts = postsData;
    }
  },
  created() {
    this.fetchPosts();
  },
});

const vm = app.mount("#app");