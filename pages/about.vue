<template>
  <div class="site">
    <g-header />
    <g-profile />
    <g-footer />
  </div>
</template>

<script>
  import Header from '~components/header'
  import Profile from '~components/profile'
  import Footer from "~components/footer"

  export default {
    components: {
      GHeader: Header,
      GProfile: Profile,
      GFooter: Footer
    }
  }
</script>