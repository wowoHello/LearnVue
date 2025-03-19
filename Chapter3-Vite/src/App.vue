<template>
  <main class="bg">
    <word-count />
    <div>
      <MessageItem 
        v-for="message in messages" 
        :key="message.id"
        v-bind="message"
        @deletePost="handleDeletePost"        
      />
    </div>
    <BaseCard>
      <template #title>
        <h1>這是卡片標題</h1>
      </template>
      <template #content>
        <p>這是卡片內容</p>
      </template>
    </BaseCard>
    <PaginationComponent 
      :totalPage = "totalPage"
      :defaultCurrentPage = "currentPage"
    />
    <button type="button" @click="totalPage += 1">增加頁面</button>
    <MovieCard />
    <ContactList v-slot:default="{ contact }">
      <!-- slot的 name 預設為 default，且只有一個 slot，所以可以省略 template 並使用解構再省略props-->
      <p>{{ contact.name }}</p>
      <p>{{ contact.email }}</p>
    </ContactList>
    <div class="card">
      <div class="box">
      </div>
      <div class="control">
        <input type="range" min="0" max="360" v-model="degree">
      </div>
      <p style="color: antiquewhite;">當前角度：{{ degree }}</p>
    </div>
  </main>
</template>

<script>
import WordCount from './components/WordCount.vue'
import MessageItem from './components/MessageItem.vue';
import BaseCard from './components/BaseCard.vue';
import PaginationComponent from './components/PaginationComponent.vue';
import MovieCard from './components/MovieCard.vue';
import ContactList from './components/ContactList.vue';

export default {
  components: {
    WordCount,
    MessageItem,
    BaseCard,
    PaginationComponent,
    MovieCard,
    ContactList
  },
  data() {
    return {
      totalPage: 6,
      currentPage: 4,
      messages: [
        {
          id: 1,
          sender: "張三",
          time: "08:20",
          msg: "你好嗎？"
        },
        {
          id: 2,
          sender: "李四",
          time: "08:30",
          msg: "我很好。"
        },
        {
          id: 3,
          sender: "老五",
          time: "08:40",
          msg: "走啊吃飯。"
        },
      ],
      degree: 0,
    }
  },
  computed: {
    degreeStr() {
      return this.degree + "deg";
    }
  },
  methods: {
    handleDeletePost(id) {
      this.messages = this.messages.filter((p) => p.id !== id)
    },
  },
  mounted() {
    throw new Error("發生異常");
  }
}
</script>
<style scoped>
.bg{
  margin: 0;
  box-sizing: border-box;
  background: #2c2c2c;
  padding: 20px;
}
.box {
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 10px;
  margin: auto;
  margin-bottom: 30px;
  background-color: hsl(278, 77%, 67%);
  box-shadow: 0 0 24px hsl(280deg, 100%, 70%, 0.5);
  transform: rotate(v-bind(degreeStr));
}

</style>