<template>
  <main>
    <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    </div>
    <word-count />
    <div>
      <MessageItem 
        v-for="message in messages" 
        :key="message.id"
        v-bind="message"
      ></MessageItem>
    </div>
    <BaseCard>
      <template #title>
        <h1>這是卡片標題</h1>
      </template>
      <template #content>
        <p>這是卡片內容</p>
      </template>
    </BaseCard>
  </main>
</template>

<script>
import WordCount from './components/WordCount.vue'
import MessageItem from './components/MessageItem.vue';
import BaseCard from './components/BaseCard.vue';
export default {
  components: {
    WordCount,
    MessageItem,
    BaseCard,
  },
  data() {
    return {
      messages: [
        {
          id: 0,
          sender: "張三",
          time: "08:20",
          msg: "你好嗎？"
        },
        {
          id: 1,
          sender: "李四",
          time: "08:30",
          msg: "我很好。"
        },
        {
          id: 2,
          sender: "老五",
          time: "08:40",
          msg: "走啊吃飯。"
        },
      ]
    }
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
