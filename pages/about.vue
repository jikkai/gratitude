<template>
  <div class="site">
    <g-header />
    
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>

    <g-footer />
  </div>
</template>

<script>
  import Header from '~components/header'
  import Footer from "~components/footer"

  export default {
    data ({ req }) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    components: {
      GHeader: Header,
      GFooter: Footer
    }
  }
</script>