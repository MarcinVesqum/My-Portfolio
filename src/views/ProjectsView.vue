<template>
    <div class="projects section">
        <div class="container">
            <div class="row">
                <div class="section__title padding-15">
                    <h2>Projects</h2>
                  </div>
            </div>
            <div class="row">
                <div class="projects__heading padding-15">
                    <h2>My Last Projects :</h2>
                </div>
            </div>
            <div class="row">
                <div
                v-for="project in projects"
                :key="project.id"
                 class="projects__item padding-15">
                    <CardComponent class="projects__item__inner" :project="project">
                        <ButtonComponent>
                            <a class="project__btn button" :href="project.url">View Demo</a>
                        </ButtonComponent>
                    </CardComponent>
                        
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import ButtonComponent from '../components/ButtonComponent.vue';
import CardComponent from '../components/CardComponent.vue'
import { useProjectsStore } from '../stores/projects'
import { storeToRefs } from 'pinia'

const storeProjects = useProjectsStore()
const { projects } = storeToRefs(storeProjects)

</script>

<style lang="scss" scoped>
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
        flex: 0 0 33.33%;
        max-width: 33.33%;
        margin-bottom: 30px;
        &__inner {
            border: 6px solid var(--bg-black-100);
            border-radius: 10px;
            overflow: hidden;
            cursor: pointer;
        }
    }
}
</style>