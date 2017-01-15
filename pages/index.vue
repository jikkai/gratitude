<template>
  <div>

    <g-footer />
  </div>
</template>

<script>
  import Footer from "~components/footer"

  export default {
    data () {
      return {
        profile: {
          title: 'Gratitude',
          subtitle: 'No Past No future'
        }
      }
    },
    components: {
      GFooter: Footer
    }
  }
</script>
