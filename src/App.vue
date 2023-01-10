<script setup>
import { onMounted } from 'vue-demi'
import Navigation from './components/Navigation.vue'
import { useProjectsStore } from './stores/projects'


const storeProjects = useProjectsStore()

onMounted(() => {
  storeProjects.init()
})
</script>

<template>
  <div class="app">
    <div class="app__left">
      <Navigation />
    </div>
    <div class="app__right">
      <RouterView />
    </div>
  </div>
</template>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700;900&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  list-style: none;
  text-decoration: none;
  outline: none;
}

:root {
  --crl: #333652;
  --btn: #FAD02C;
  --blue-gray: #E9EAEC;
  --bgc: #E9EAEC;
  --text-white: #ffff;
  --text-black: rgba(0, 0, 0, 0.900);
  --text-black-700: rgba(0, 0, 0, 0.700);
  --bg-black-100: rgba(0, 0, 0, 0.100);
  --bg-black-50: rgba(0, 0, 0, 0.05);
}


html,
body {
  background-color: var(--crl);
  
}
.shadow-dark {
  box-shadow: 0 0 20px rgba(48, 46, 77, 0.15);
}
.container {
  margin: auto;
  width: 100%;
  max-width: 1200px;
}
.section {
  background-color: var(--bgc);
  padding: 0 20px;
  position: relative;
  
  min-height: 100vh;
  display: block;
  opacity: 1;
  & .container {
    padding-top: 60px;
    padding-bottom: 70px;
  }
  &__title {
    flex: 0 0 100%;
    max-width: 100%;
    margin-bottom: 60px;
    h2 {
      font-size: 3em;
      color: var(--text-black);
      font-weight: 700;
      &::before {
        content: '';
        width: 50px;
        height: 5px;
        position: absolute;
        bottom: 100%;
        left: 120px;
        background-color: var(--btn);
      }
      &::after {
        content: '';
        width: 50px;
        height: 5px;
        position: absolute;
        bottom: 100%;
        left: 20px;
        background-color: var(--btn);
      }
    }
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  position: relative;
}
.button {
  padding: 0.4em 2.2em;
  border-radius: 15px;
  border: none;
  white-space: nowrap;
  display: inline-block;
  font-weight: bold;
  color: var(--crl);
  background-color: var(--btn);
  transition: color 400ms, background-color 450ms ease-in-out;
  &:hover {
    color: var(--btn);
    background-color: var(--crl);
  }
  &:focus {
    border: 0.5px solid rgba(0, 0, 0, 0.05);
  }
}
.padding-15 {
  padding-right: 15px;
  padding-left: 15px;
}

.app {
  display: flex;
  max-width: 100%;

  &__left {
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 180px;
    min-height: 100%;
    background-color: var(--crl);
  }
  &__right {
    width: 100%;
    height: 100vh;
  }
}

@media screen and (max-width: 947px)  {
  
  
  .app {
    display: flex;
    flex-direction: column;
    &__left {
      max-width: 100%;
      height: 100%;
      max-height: 100%;
      position: relative;
    }
    .about {
      &__education,
      &__experience {
        margin-top: 150px;
        flex: 0 0 100%;
        max-width: 100%;
      }
      &__personal {
        display: flex;
        flex-direction: column !important;
        &__info {
          position: relative;
          flex: 0 0 100%;
          max-width: 100%;
          margin-top: 20px;

          &__item {
            flex: 0 0 50%;
            max-width:50%;
          }
        }
        &__skill {
          position: absolute;
          display: flex;
          flex: 0 0 20%;
          max-width: 20%;
          margin-top: 0px;
          margin-bottom: 30px;
          &__item {
            flex: 0 0 70%;
            max-width: 70%;
          }

        }
      }
      &__buttons {
        margin-top: 30px;
        &--btn {
          margin-bottom: 10px;
        }
      }
    }

    .home {
      width: 100%;
      display: flex;
      flex-direction: column-reverse !important;
      justify-content: center;
      align-items: center;
      &__info {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        text-align: center;
      }
      &__img {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        margin-top: 30px;
      }
    }
    .projects {
      &__heading {
          flex: 0 0 100%;
          max-width: 100%;
          h2 {
              color: var(--text-black-700);
              font-weight: 500;
  
          }
      }
      &__item {
          flex: 0 0 50% !important;
          max-width: 50% !important;
          margin-bottom: 30px;
          &__inner {
              border: 6px solid var(--bg-black-100);
              border-radius: 10px;
              overflow: hidden;
              cursor: pointer;
          }
      }
    }
    
  }
}

@media screen and (max-width: 633px)  {
  .app {
    .section {
      &__title {
        text-align: center;
        h2 {
          font-size: 2.7em;
          &::before {
            content: '';
            width: 50px;
            height: 5px;
            position: absolute;
            bottom: 100%;
            left: 50%;
            background-color: var(--btn);
          }
          &::after {
            content: '';
            width: 50px;
            height: 5px;
            position: absolute;
            bottom: 100%;
            left: 30%;
            background-color: var(--btn);
          }
        }
      }
    }
    .about {
      &__education,
      &__experience {
        margin-top: 200px;
        padding: 20px 30px;
      }
      &__personal {
        display: flex;
        flex-direction: column !important;
        &__info {
          position: relative;
          flex: 0 0 100%;
          max-width: 100%;
          margin-top: 20px;

          &__item {
            flex: 0 0 70%;
            max-width:70%;
          }
        }
        &__skill {
          position: absolute;
          display: flex;
          flex: 0 0 30%;
          max-width: 20%;
          margin-top: 0px;
          margin-bottom: 30px;
          
          &__item {
            flex: 0 0 100%;
            max-width: 100%;
            &__progress {
              display: none;
            }

          }

        }
      }
      &__buttons {

        &--btn {
          margin-bottom: 10px;
        }
      }
    }
    .contact {
      &__info__item {
        flex: 0 0 100% !important;
        max-width: 100% !important;
        margin-bottom: 5px;
      }
      
    }
    .projects {
      &__heading {
        flex: 0 0 100%;
        max-width: 100%;
        h2 {
            text-transform: uppercase;
            text-align: center;
            color: var(--text-black-700);
            font-weight: bold !important;

        }
    }
    &__item {
        display: flex;
        justify-content: center;
        flex: 0 0 100% !important;
        max-width: 100% !important;
        margin-bottom: 30px;
        &__inner {
            border: 6px solid var(--bg-black-100);
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
        }
    }
    }

  }
  
}



</style>