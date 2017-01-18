<template>
  <div class="site-profile">
    <section class="site-profile__block">
      <header class="site-profile__block--header">Test</header>
      <div class="site-profile__block--body">
        content
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    created () {

    }
  }
</script>

<style>
  @component-namespace site {
    @b profile {
      width: 80%;
      margin: auto;

      @e block {
        box-sizing: border-box;

        @m header {
          padding: 8px 12px;
          background: #DD6262;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }

        @m body {
          padding: 12px;
          background: #353845;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
      }
    }
  }
</style>
