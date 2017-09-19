<template>
  <section class="period-friends">
    <header class="period-friends__title">
      <h1>友链</h1>
      <p>Friends</p>
    </header>
  </section>
</template>

<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>


<style>
  @import "../assets/reset.css";

  @component-namespace period {
    @c friends {
      size: 100%;
      padding-top: 5%;
      padding-left: 12%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      user-select: none;
      cursor: default;

      @d title {
        margin-bottom: 24px;

        & p {
          font-family: "Work Sans", sans-serif;
          font-size: 20px;
        }
      }
    }
  }
</style>
