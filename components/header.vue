<template>
  <header class="site-header">
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'title'
    ])
  }
</script>

<style >
  @component-namespace site {
    @b header {
      padding-top: 24px;
      text-align: center;
      font-family: 'Satisfy', cursive;
      font-size: 48px;
    }
  }
</style>
