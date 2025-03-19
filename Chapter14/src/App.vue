<script setup>
import SearchNote from './components/SearchNote.vue';
import NoteList from './components/NoteList.vue';
import AddNote from './components/AddNote.vue';
import { useUserStore } from './stores/user';

const userStore = useUserStore();

console.log(userStore.theme)

</script>

<template>
  <main>
    <h1>我的筆記本</h1>
    <SearchNote />
    <NoteList />
    <AddNote />
    <p class="user">當前登錄的用戶： {{ userStore.user.name }}</p>
  </main>
</template>

<style scoped>
main {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  display: grid;
  justify-items: center;
  padding: 48px 0;
}
</style>
