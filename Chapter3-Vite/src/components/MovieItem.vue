<template>
  <MovieTitle/>
  <div class="description">
    {{ description }}
  </div>
</template>
<script>
import MovieTitle from './MovieTitle.vue';
export default {
  components: {
    MovieTitle,
  },
  props:["description"],
}
</script>