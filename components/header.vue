<template>
  <header class="site-header">
    <h1>
      <nuxt-link to="/">
        {{ meta.title }}
      </nuxt-link>
    </h1>
  </header>
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

<style >
  @component-namespace site {
    @c header {
      padding-top: 24px;
      text-align: center;
      font-family: 'Satisfy', cursive;
      font-size: 48px;
    }
  }
</style>
