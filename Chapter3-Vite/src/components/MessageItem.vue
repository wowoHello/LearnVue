<template>
  <div>
    <p>{{ sender }}</p>
    <span>{{ time }}</span>
    <p>{{ msg }}</p>
  </div>
</template>
<script>
export default {
  props: ["sender", "time", "msg"],
  mounted() {
    console.log(this.sender)
  }
}
</script>