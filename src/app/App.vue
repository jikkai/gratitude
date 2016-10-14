<template>
  <div id="app" v-cloak>
    <section>
      <header>
        <div id="avatar"></div>
        <h1>{{profile.title}}</h1>
        <p>{{profile.subtitle}}</p>
      </header>
      <footer>
        <ul>
          <li v-for="link in links">
            <a :href="link.url" :class="'fa-' + link.icon" :title="link.title" class="fa"></a>
          </li>
        </ul>
      </footer>
    </section>
    <footer>
      © 2016 {{profile.title}}
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
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
    }
  }
</script>