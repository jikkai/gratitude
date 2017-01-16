<template>
  <div>
    <g-floatball />
    <g-footer />
  </div>
</template>

<script>
  import Floatball from '~components/floatball'
  import Footer from "~components/footer"

  export default {
    components: {
      GFloatball: Floatball,
      GFooter: Footer
    }
  }
</script>
