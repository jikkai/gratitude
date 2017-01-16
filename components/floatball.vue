<template>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</template>

<script>
  export default {
    created () {
      if (typeof window !== 'undefined') {
        console.log(this.$el)
      }
    }
  }
</script>
