<script setup>
</script>

<template>
<div class="home section">
    <div class="container">
        <div class="row">
            <div class="home__info padding-15">
                <h3 class="home__info__text">Hello, my name is <span class="home__info__text--name">Marcin Pełszyk</span></h3>
                <h3 class="home__info__my">I'm a <span class="home__info__my--typing">Web develoepr</span></h3>
                <p class="home__info__description">
                    I'm a web Develoepr with extensive experice for over year.
                    My expirtise is to create and website and many more..
                </p>
                <button-component> 
                    <router-link class="home__btn button" :to="{ name: 'contact'}">Hire me</router-link>
                </button-component>
            </div>
            <div class="home__img padding-15">
                <img src="../assets/profile-img.jpg" alt="Me profile photo">
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.home {
    display: flex;
    color: var(--text-black);
    &__btn {
        text-transform: uppercase;
        letter-spacing: 0.05rem;
        padding: 12px 35px;
    }
    &__info {
        flex: 0 0 60%;
        max-width: 60%;
        &__text {
            font-size: 2em;
            margin: 15px 5px;
            &--name {
                font-family: 'Poppins', cursive;
                font-weight: 900;
                color: var(--btn);
            }
        }
        &__my {
            margin: 10px 5px;
            &--typing {
                font-size: 1.5em;
                font-family: 'Poppins', cursive;
                font-weight: 900;
                color: var(--btn);
            }
            
        }
        &__description {
            font-size: 1.1em;
            margin: 20px 5px;
            margin-bottom: 80px;
        }
    }
    &__img {
        flex: 0 0 40%;
        max-width: 40%;
        text-align: center;
        position: relative;
      
        img {
            margin: auto;
            border: 5px solid var(--crl);
            border-radius: 20px;
            height: 300px;
            width: 300px;
            
        }
    }
}

</style>
