<template>
  <div class="card">
    <p>{{ sender }}</p>
    <span>{{ time }}</span>
    <p>{{ msg }}</p>
    <button type="button" @click="$emit('deletePost', id)">刪除</button>
  </div>
</template>
<script>
export default {
  props: ["id", "sender", "time", "msg"],
  emits: ["deletePost"],
  mounted() {
    console.log(this.sender);
  },
};
</script>

<style scoped>
.card {
  background-color: hsl(325, 100%, 83%);
  border-radius: 20px;
}
</style>