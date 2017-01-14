<template>
  <div id="app">
    <section>
      <header>
        <div id="avatar"></div>
        <h1>{{profile.title}}</h1>
        <p>{{profile.subtitle}}</p>
      </header>
      <nuxt-link to="/about">About page</nuxt-link>
      <footer>
        <ul>
          <li v-for="link in links">
            <a :href="link.url" :class="'fa-' + link.icon" :title="link.title" class="fa"></a>
          </li>
        </ul>
      </footer>
    </section>

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
        },
        links: [
          { title: 'Blog', icon: 'hashtag', url: 'http://blog.asaki.me' },
          { title: 'Github', icon: 'github', url: 'https://github.com/jikkai' },
          { title: 'Weibo', icon: 'weibo', url: 'http://weibo.com/scharfrichter' }
        ]
      }
    },
    components: {
      GFooter: Footer
    }
  }
</script>
