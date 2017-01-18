<template>
  <footer class="site-footer">
    © {{ fromDate }} - {{ toDate }} 
    <span class="site-footer__title">{{ title }}</span>
  </footer>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'title', 'fromDate', 'toDate'
    ])
  }
</script>

<style>
  @component-namespace site {
    @b footer {
      width: 100%;
      margin-bottom: 12px;
      padding-top: 48px;
      text-align: center;

      @e title {
        font-family: 'Satisfy', cursive;
      }
    }
  }
</style>
