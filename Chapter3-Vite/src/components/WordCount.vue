<template>
  <div>
    <input type="text" v-model="content">
    <p>
      文本共有{{ WordCount }}字符
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: '',
    }
  },
  computed: {
    WordCount() {
      return this.content.length;
    }
  }
}
</script>