<template>
  <div id='app'>
    <div id="app">You have been here for {{ counter }} seconds.</div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        counter: 0
      }
    },
    created() {
      setInterval(() => {
        this.counter += 1
      }, 1000)
    }
  }

</script>