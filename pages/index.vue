<template>
  <section class="period-index">
    <header class="period-index__title">
      <h1>Period</h1>
      <p>Gut Ding will Weile haben.</p>
    </header>

    <div class="period-index__links">
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
      padding-left: 12%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      user-select: none;
      cursor: default;

      @d title {
        & h1 {
          color: #000;
          font-family: "Alegreya Sans SC", sans-serif;
          font-size: 64px;
        }

        & p {
          font-family: "Work Sans", sans-serif;
          font-size: 20px;
        }
      }

      @d links {
        margin-top: 24px;

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
  }
</style>
