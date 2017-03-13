<template>
  <div class="site-profile">
    <section class="site-profile__block" v-for="(profile, key) in meta.profile">
      <header class="site-profile__block--header">
        {{ key }}
      </header>
      <div class="site-profile__block--body">
        <div v-for="item in profile">
          <label>{{ item.label }}</label>
          <span>
            <template v-if="item.value.indexOf('http') !== 0 && !~item.value.indexOf('%')">
              {{ item.value }}
            </template>
            <template v-else-if="~item.value.indexOf('%')">
              <progress :value="item.value.replace('%', '')" max="100">{{ item.value }}</progress>
            </template>
            <template v-else>
              <a :href="item.value">
                {{ item.value.replace(/^https?:\/\//, '') }}
              </a>
            </template>
          </span>
        </div>
      </div>
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

<style>
  @component-namespace site {
    @c profile {
      width: 80%;
      max-width: 540px;
      margin: auto;
      @media (min-width: 640px) {
        @c profile {
          width: 98%;
        }
      }

      @d block {
        margin: 16px 0;
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
          white-space: nowrap;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          overflow: auto;

          & div {
            font-size: 14px 1.7;
            letter-spacing: 1px;
            display: flex;

            & label {
              min-width: 260px;
              display: block;
            }

            & span {
              padding-right: 12px;
              display: block;
              flex: 1;

              & a {
                color: #869E97;
              }
            }
          }
        }
      }
    }
  }
</style>
