<template>
<ul class="card">
  <li 
  v-for="contact in contacts" 
  :key="contact.id">
    <slot :contact="contact"></slot>
  </li>
</ul>
</template>
<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          name: "John",
          email: "john@test.com"
        },
        {
          id: 2,
          name: "Terry",
          email: "terry@test.com"
        },
        {
          id: 3,
          name: "Marry",
          email: "marry@test.com"
        },
      ]
    }
  },
}
</script>
<style scoped>
.card {
  background-color: hsl(0, 93%, 72%);
  border-radius: 20px;
}
ul {
  list-style: none;
}
</style>