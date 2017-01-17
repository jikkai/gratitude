<template>
  <div class="site">
    <g-header />
    <g-bash />
    <g-footer />
  </div>
</template>

<script>
  import Header from '~components/header'
  import Bash from '~components/bash'
  import Footer from "~components/footer"

  export default {
    components: {
      GHeader: Header,
      GBash: Bash,
      GFooter: Footer
    }
  }
</script>
