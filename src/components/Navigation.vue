<template>
    <header>
        <!-- Desctop -->
        <nav class="navigation" v-if="!activeMobile">
            <ul class="navigation__desctop">
                <router-link active-class="active"  class="navigation__desctop__item" :to="{ name: 'home'}">
                    <span class="navigation__desctop__item--icon">
                        <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span class="navigation__desctop__item--text">Home</span>
                </router-link>


                <router-link active-class="active"  class="navigation__desctop__item" :to="{ name: 'profile'}">
                    <span class="navigation__desctop__item--icon">
                        <ion-icon name="finger-print-outline"></ion-icon>
                    </span>
                    <span class="navigation__desctop__item--text">About</span>
                </router-link>


                <router-link active-class="active"  class="navigation__desctop__item" :to="{ name: 'projects'}">
                    <span class="navigation__desctop__item--icon">
                        <ion-icon name="laptop-outline"></ion-icon>
                    </span>
                    <span class="navigation__desctop__item--text">Projects</span>
                </router-link>


                <router-link active-class="active"  class="navigation__desctop__item"  :to="{ name: 'contact'}">
                    <span class="navigation__desctop__item--icon">
                        <ion-icon name="mail-unread-outline"></ion-icon>
                    </span>
                    <span class="navigation__desctop__item--text">Contact</span>
                </router-link>
                <div class="indicator"></div>
            </ul>
        </nav>
        <!-- Mobile -->
        <nav class="navigation__mobile" v-else-if="activeMobile">
            <button
            @click="toggleMenu" 
            class="navigation__mobile__burger" 
            :class="toggleBar ? 'navigation__mobile__burger': 'navigation__mobile__burger--active'"  
            aria-label="Menu">
                <span class="navigation__mobile__burger--container" tabindex="-1">
                    <span class="navigation__mobile__burger--bars"></span>
                </span>
            </button>
            <transition name="burger">
                <ul v-if="activeBurger"  class="navigation__mobile__list">
                    <router-link @click="activeBurger = false" active-class="active-mobile"  class="navigation__mobile__list__item" :to="{ name: 'home'}">
                        <span class="navigation__mobile__list__item--icon">
                            <ion-icon name="home-outline"></ion-icon>
                        </span>
                        <span class="navigation__mobile__list__item--text">Home</span>
                    </router-link>
    
    
                    <router-link @click="activeBurger = false" active-class="active-mobile"  class="navigation__mobile__list__item" :to="{ name: 'profile'}">
                        <span class="navigation__mobile__list__item--icon">
                            <ion-icon name="finger-print-outline"></ion-icon>
                        </span>
                        <span class="navigation__mobile__list__item--text">About</span>
                    </router-link>
    
    
                    <router-link @click="activeBurger = false" active-class="active-mobile"  class="navigation__mobile__list__item" :to="{ name: 'projects'}">
                        <span class="navigation__mobile__list__item--icon">
                            <ion-icon name="laptop-outline"></ion-icon>
                        </span>
                        <span class="navigation__mobile__list__item--text">Projects</span>
                    </router-link>
    
    
                    <router-link @click="activeBurger = false" active-class="active-mobile"  class="navigation__mobile__list__item"  :to="{ name: 'contact'}">
                        <span class="navigation__mobile__list__item--icon">
                            <ion-icon name="mail-unread-outline"></ion-icon>
                        </span>
                        <span class="navigation__mobile__list__item--text">Contact</span>
                    </router-link>
                </ul>
            </transition>
            
        </nav>
    </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeMobile = ref(false)
const activeBurger = ref(false)
const toggleBar = ref(false)

const toggleMenu = () => {
    toggleBar.value = !toggleBar.value
    activeBurger.value = !activeBurger.value
}
const handleResize = () => {
  
  if (window.innerWidth <= 947) {
    activeMobile.value = true
  } else {
    activeMobile.value = false
  }

}
onMounted(() => {
    window.addEventListener('resize', handleResize)
})

// onUnmounted(() => {
//     window.removeEventListener('resize', handleResize)
// })




</script>
<style lang="scss" scoped>
.navigation {
    position: fixed;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 360px;
    background-color: #fff;
    border-radius: 10px;
    &__desctop {
        &__item {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            z-index: 1;
    
            &--link {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                
            }
    
            &--icon {
                position: relative;
                display: block;
                font-size: 2.5rem;
                text-align: center;
                transition: 0.5s;
                color: var(--crl);
                z-index: 100;
            }
            &--text {
                position: absolute;
                color: var(--crl);
                font-size: 1rem;
                margin-right: 10px;
                font-weight: 700;
                transition: all 0.5s;
                opacity: 0;
                transform: translateX(-80px);
            }
        }
        .active {
            .navigation__desctop__item--icon {
                transform: translateX(70px);
                color: #fff;
        
            }
            .navigation__desctop__item--text {
                opacity: 1;
                transform: translateX(0);
            }
            
        }
        &__item:nth-child(1).active ~ .indicator  {
            transform: translateY(calc(70px * 0));
        }
        &__item:nth-child(2).active ~ .indicator {
            transform: translateY(calc(70px * 1));
        }
        &__item:nth-child(3).active ~ .indicator {
            transform: translateY(calc(70px * 2));
        }
        &__item:nth-child(4).active ~ .indicator {
            transform: translateY(calc(70px * 3));
        }
    }
    .indicator {
        position: absolute;
        top: 7%;
        left: 70%;
        width: 80px;
        height: 85px;
        background-color: var(--btn);
        border-radius: 50%;
        border: 6px solid var(--crl);
        transition: 0.5s;
        
        &::before {
            content: '';
            position: absolute;
            top: -40%;
            left: 14px;
            width: 25px;
            height: 25px;
            background-color: transparent;
            border-bottom-right-radius: 20px;
            box-shadow: 10px 4px 0 0px var(--crl);

        }
        &::after {
            content: '';
            position: absolute;
            top: 104%;
            left: 14px;
            width: 25px;
            height: 25px;
            background-color: transparent;
            border-top-right-radius: 24px;
            box-shadow: 12.9px 0px 0 0px var(--crl);

        }
    }
    // MOBILE
   
}
.navigation__mobile {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 100%;
    color: #ffff;
    &__burger {
        margin: 10px auto;
        border: 0;
        background-color: transparent;
        cursor: pointer;
        &:focus {
            & > .navigation-mobile__mobile__burger--container {
                box-shadow: 0 0 2px 2px #51a7e8;
            }
        }
        &,
        &--container {
            &:focus {
              outline: none;
            }
        }
        &--container {
            display: flex;
            align-items: center;
            position: relative;
            width: 35px;
            height: 30px;
        }
        &--bars {
            position: absolute;
            width: 35px;
            height: 2px;
            background-color: #fff;
            transition: transform 220ms ease-in-out;
        
            &::before,
            &::after {
              display: block;
              position: absolute;
              width: 35px;
              height: 2px;
              background-color: #fff;
              content: '';
            }
        
            &::before {
              top: -12px;
              transition: top 100ms 250ms ease-in, transform 220ms ease-in-out;
            }
        
            &::after {
              bottom: -12px;
              transition: bottom 100ms 250ms ease-in, transform 220ms ease-in-out;
            }
        }
        &--active {
            .navigation__mobile__burger--bars {
                transform: rotate(360deg);
                transition: transform 0.5s  ease-in-out;
            }
            &::before {
                top: 0;
                transition: top 0.4s ease-out;
            }
        
            &::after {
                bottom: 0;
                transform: rotate(-90deg);
                transition: bottom 0.4s ease-out, transform 0.5s ease-in-out;
            }
        }
    }
    &__list {
        display: flex;
        flex-direction: column;
        background-color: #FAD02C;
        width: 100vw;
        max-width: 100vh;
        z-index: 100;
        &__item{
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
            color: var(--crl);
            margin: 0 20px;
            &--text {
                flex: 20;
                font-size: 1rem;
                margin-left: 10px;
            }
            &--icon {
                flex: 1;
                font-size: 1.5rem;
                margin-right: 10px;

            }
        }
    }
    .active-mobile {
        background-color: #fddd60;
        border-radius: 15px;
        transition: 0.5s;
    }
    
}

.burger-enter-to ,
.burger-leave-from {
    opacity: 1;
}
.burger-enter-active ,
.burger-leave-active {
    transition: opacity 0.3s ease;
}
.burger-enter-from ,
.burger-leave-to {
    opacity: 0;
}
</style>