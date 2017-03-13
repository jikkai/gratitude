<template>
  <div class="site-links">
    <section class="site-links__block" v-for="item in meta.links">
      <h3>
        <a :href="item.link" target="_blank">
          {{ item.title }}
        </a>
      </h3>
      <span>{{ item.author }}</span>
      <p>{{ item.desc }}</p>
    </section>
  </div>
</template>

<script>
  import meta from '~/lib/meta'

  export default {
    data () {
      return {
        meta
      }
    }
  }
</script>

<style >
  @component-namespace site {
    @c links {
      width: 80%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      @d block {
        width: 40%;
        min-width: 240px;
        margin: 0 auto 16px;
        text-align: center;

        & h3 {
          margin-bottom: 12px;
          font-size: 18px;
        }

        & span {
          margin-bottom: 12px;
          color: #81C79E;
          font-size: 14px;
          display: block;
        }

        & p {
          color: #869E97;
          font-size: 14px;
          font-style: italic;
        }
      }
    }
  }
</style>
