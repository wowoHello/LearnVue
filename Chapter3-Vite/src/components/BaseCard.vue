<template>
  <div class="card">
    <div class="title">
      <slot name="title">

      </slot>
    </div>
    <div class="content">
      <slot name="content">
        
      </slot>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.card {
  background-color: hsl(61, 94%, 79%);
  border-radius: 20px;
}
</style>