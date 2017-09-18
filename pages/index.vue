<template>
  <section class="period-index">
    <header class="period-title">
      <h1>Period</h1>
      <p>
        <em>Gut Ding will Weile haben.</em>
      </p>
    </header>

    <div class="period-links">
      <ul>
        <li v-for="link in links" :key="link.url">
          <a v-if="link.external" :href="link.url">{{ link.title }}</a>
          <router-link v-else :to="link.url">{{ link.title }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        links: [
          { title: '博客', url: 'https://blog.asaki.me', external: true },
          { title: '应用', url: '/apps' },
          { title: '友链', url: '/friends' }
        ]
      }
    }
  }
</script>


<style>
  @import "../assets/reset.css";

  @component-namespace period {
    @c index {
      size: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
      cursor: default;
    }

    @c title {
      padding-left: 12%;
      box-sizing: border-box;
      & h1 {
        color: #000;
        font-family: "Alegreya Sans SC", sans-serif;
        font-size: 64px;
      }
    }

    @c links {
      margin-top: 24px;
      padding-left: 12%;
      box-sizing: border-box;

      & ul {
        display: flex;
        & li a {
          margin-right: 1em;
          padding: 0 1em;
          border: 1px solid #888;
          border-radius: 1em;
          display: block;
          transition: all .2s;
          &:hover {
            color: #1ABC9C;
            border-color: #1ABC9C;
          }
        }
      }
    }
  }
</style>
