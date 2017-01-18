<template>
  <div class="site">
    <g-header />
    <g-links />
    <g-footer />
  </div>
</template>

<script>
  import Header from '~components/header'
  import Links from '~components/links'
  import Footer from "~components/footer"

  export default {
    components: {
      GHeader: Header,
      GLinks: Links,
      GFooter: Footer
    }
  }
</script>
