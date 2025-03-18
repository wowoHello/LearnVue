<template>
  <div class="card">
    <MovieItem 
    :description = "movie.description"
    />
  </div>
</template>
<script>
import MovieItem from './MovieItem.vue';
export default {
  components: {
    MovieItem
  },
  data() {
    return {
      movie: {
        title: "電影",
        description: "這是一段電影描述"
      }
    }
  },
  // 在 provide 中要讀取data中的屬性，要使用函數
  provide() {
    return {
      title: this.movie.title
    }
  }
}
</script>

<style scoped>
.card {
  background-color: hsl(200, 100%, 70%);
  border-radius: 20px;
}
</style>