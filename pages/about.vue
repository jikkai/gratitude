<template>
  <div>
    <p>Hi from {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>

    <g-footer />
  </div>
</template>

<script>
  import Footer from "~components/footer"

  export default {
    data ({ req }) {
      return {
        name: req ? 'server' : 'client'
      }
    },
    components: {
      GFooter: Footer
    }
  }
</script>