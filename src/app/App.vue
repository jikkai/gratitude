<template>
  <div id='app'>
    <section id="profile">
      <div id="profile-pic"></div>
      <h1>{{profile.title}}</h1>
      <h2>{{profile.subtitle}}</h2>
    </section>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        profile: {
          title: 'Gratitude',
          subtitle: 'Carpe diem quam minimum credula postero'
        }
      }
    }
  }
</script>

<style lang="sass">
  html,
  body {
    height: 100%;
    background: url('./assets/bg.jpg') no-repeat; 
    background-size: cover;
    #app {
      height: 100%;
      #profile {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        #profile-pic {
          width: 240px;
          height: 240px;
          background: url('./assets/jikkai.png') no-repeat;
          background-size: cover;
          border: 4px solid #FFF;
          border-radius: 50%;
          box-shadow: 0 0 50px 5px #FFF;
        }
        h1,
        h2 {
          color: #FFF;
          text-shadow: 0 0 6px #FFF;
        }
        h1 {
          font-size: 48px;
          font-weight: normal;
        }
        h2 {
          font-size: 14px;
        }
      }
    }
  }
</style>