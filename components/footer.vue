<template>
  <footer class="site-footer">
    © {{ meta.fromDate }} - {{ meta.toDate }} 
    <span class="site-footer__title">{{ meta.title }}</span>
  </footer>
</template>

<script>
  import meta from '~/lib/meta'

  export default {
    data () {
      return {
        meta
      }
    }
  }
</script>

<style>
  @component-namespace site {
    @c footer {
      width: 100%;
      margin-bottom: 12px;
      padding-top: 48px;
      text-align: center;

      @d title {
        font-family: 'Satisfy', cursive;
      }
    }
  }
</style>
