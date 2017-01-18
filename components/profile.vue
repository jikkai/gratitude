<template>
  <div class="site-profile">
    <section class="site-profile__block">
      <div>Test</div>
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
        padding: 12px;
        box-sizing: border-box;
      }
    }
  }
</style>
