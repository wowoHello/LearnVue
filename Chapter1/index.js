const sayHello = {
  data() {
    return {
      todos: [
        {
          content: "看書",
          complete: true
        },
        {
          content: "寫作業",
          complete: false
        },
        {
          content: "聽音樂",
          complete: false
        }
      ],
      books: ["Javascript基礎語法", "Vue實戰演練", "程式基礎教學"],
      showAnswer: false,
      countDown: 5,
      timer: null,
      blogPosts: ["Vue3 全家餐", "Vue3 完全指南", "Javascript初學路線" ],
      // count: 3,
      newBlog: "",
      username: "",
    }
  },
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案"+ this.countDown : "顯示答案"
    },
    count() {
      return this.blogPosts.length
    }
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer 
    },
    createNewBlog() {
      this.newBlog = "Vue 全方位對策";
    },
    // HandleInput(e) {
    //   this.username = e.target.value;
    // },
    resetUsername() {
      this.username = "";
    }
  },
  watch: {
    showAnswer(newVal, oldVal) {
      if (newVal) {
        this.countDown = 5;
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null
        }
        this.timer = setInterval(() => {
          this.countDown -= 1;
          if (this.countDown === 0) {
            this.showAnswer = false;
            clearInterval(this.timer);
            this.timer = null
          }
        }, 1000)
      }
    },
    blogPosts: {
      handler(newVal) {
        this.count = newVal.length
      },
      deep: true
    },
    newBlog(newVal) {
      setTimeout(() => {
        this.blogPosts.push(newVal);        
      }, 2000);
    }
  }
}

Vue.createApp(sayHello).mount("#app");