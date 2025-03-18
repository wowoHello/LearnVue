<template>
  <div class="card">
    <p>當前頁：{{ currentPage }}</p>
    <button type="button" v-for="n in totalPage" @click="changePage(n)">{{ n }}</button>
  </div>
</template>

<script>
export default {
  props: ["totalPage", "defaultCurrentPage"],
  data() {
    return {
      currentPage: this.defaultCurrentPage,
    }
  },
  methods: {
    changePage(n) {
      this.currentPage = n
    }
  },
  watch: {
    totalPage(newVal, oldVal) {
      console.log(newVal, oldVal);
      this.currentPage = 1;
    },
  }
}
</script>

<style scoped>
.card {
  background-color: hsl(36, 100%, 89%);
  border-radius: 20px;
}
</style>