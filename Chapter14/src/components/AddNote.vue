<template>
  <div class="addNote">
    <h2>新增筆記</h2>
    <form @submit.prevent = "addNote">
      <input type="text" placeholder="請輸入筆記標題" v-model="note.title" />
      <textarea rows="6" placeholder="請輸入筆記內容" v-model="note.content"></textarea>
      <button type="submit">新增筆記</button>
    </form>
  </div>
</template>
<script setup>
import { useNoteStore } from '@/stores/note';
import { reactive } from 'vue';

const noteStore = useNoteStore();

const note = reactive({
  title: "",
  content: ""
});

function addNote() {
  // 修改狀態
  // noteStore.$patch({
  //   notes: [
  //     ... noteStore.notes,
  //     {
  //       id: noteStore.notes.length + 1,
  //       title: note.title,
  //       content: note.content,
  //     }
  //   ],
  //   searchTerm:  "",
  // })
  noteStore.addNote(note.title, note.content);
  note.title = "";
  note.content = "";
};

</script>
<style scoped>
.addNote {
  width: 100%;
  border-top: 1px solid hsl(0, 0%, 95%);
  padding-top: 24px;
}

.addNote h2 {
  margin-bottom: 12px;
}

.addNote form {
  display: grid;
  gap: 24px;
}
</style>
