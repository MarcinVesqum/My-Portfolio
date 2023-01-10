<template>
    <div class="card shadow-dark">
        <div class="card__image">
            <img  src="../assets/img/project2.jpg" :alt="project.alt">
        </div>
        <div class="card__header">
            <div class="card__header__title padding-15">
                <h4>{{ project.title }}</h4>
            </div>
            <div class="card__header__subtitle padding-15">
                <span>{{ project.subtitle }}</span>
            </div>
        </div>
        <div class="card__body padding-15">
            <p>{{ project.description }}</p>
        </div>
        <div class="card__footer">
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    project: {
        type: Object,
        required: true
    }
})
</script>

<style lang="scss">
.card {
    display: block;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    position: relative;
    width: 100%;
    max-width: 300px;

    &__image {
        border-radius: 10px;
        img {
            width: 100%;
        }
    }
    &__header {

        &__title {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 2px;
            background-color: var(--btn);
            color: var(--crl);
            text-align: center;
            margin-bottom: 5px;

        }
        &__subtitle {
            margin-bottom: 5px;
            font-size: 18px;
            font-weight: 500;
            text-transform: capitalize;
        }
    }
    &__body {
        font-size: 14px;
    }
    &__footer {
        display: flex;
        justify-content: center;
        margin: 10px 0;
    }
}
</style>