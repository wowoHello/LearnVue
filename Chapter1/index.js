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
    }
  },
  computed: {
    label() {
      return this.showAnswer ? "隱藏答案"+ this.countDown : "顯示答案"
    }
  },
  methods: {
    toggleAnswer() {
      this.showAnswer = !this.showAnswer 
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
    }
  }
}

Vue.createApp(sayHello).mount("#app");