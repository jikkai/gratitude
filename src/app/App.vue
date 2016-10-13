<template>
  <div id='app'>
    <section id="profile">
      <header>
        <div id="avatar"></div>
        <h1>{{profile.title}}</h1>
        <p>{{profile.subtitle}}</p>
      </header>
    </section>
    <footer>
      © JANE DOE DESIGN: HTML5 UP
    </footer>
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
    background-color: #FFF;
    background-image: url(./assets/overlay.png), linear-gradient(60deg, rgba(255, 165, 150, .5) 5%, rgba(0, 228, 255, .35)), url(./assets/bg.jpg);
    background-repeat: repeat, no-repeat, no-repeat;
    background-size: 100px 100px, cover, cover;
    background-position: top left, center center, bottom center;
    background-attachment: fixed, fixed, fixed;
    #app {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      #profile {
        width: 400px;
        padding: 66px 44px 44px 44px;
        text-align: center;
        background: #FFF;
        border-radius: 4px;
        box-sizing: border-box;
        opacity: 0.95;
        #avatar {
          width: 122px;
          height: 122px;
          margin: auto;
          background: url("./assets/jikkai.png");
          border-radius: 50%;
        }
      }
    }
  }
</style>