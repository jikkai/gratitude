<template>
  <section class="period-apps">
    <header class="period-apps__title">
      <h1>应用</h1>
      <p>Application</p>
    </header>

    <div class="period-apps__links">
      <div v-for="app in apps" :key="app.title">
        <a :href="app.url" target="_blank">{{ app.title }}</a>
        <p>KONAMI 制音乐游戏「ギタドラ」系列的非官方离线成绩记录工具。</p>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        apps: [
          { title: 'GITADORA SKILL RECORDER', url: 'https://gsr.asaki.me' }
        ]
      }
    }
  }
</script>


<style>
  @import "../assets/reset.css";

  @component-namespace period {
    @c apps {
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

      @d links {
        & a {
          font-size: 20px;
          transition: all .2s;
          &:hover {
            color: #1ABC9C;
          }
        }
        & p {
          font-size: 16px;
        }
      }
    }
  }
</style>
