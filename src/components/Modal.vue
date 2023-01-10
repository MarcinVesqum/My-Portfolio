<template>
    <transition name="modal">
        <div class="modal modal-mask" v-if="open">
            <div class="modal-wrapper">
                <div class="modal-container">

                    <div class="modal-header">
                        <slot name="header">
                            {{ title }}
                        </slot>
                        <span @click.prevent="close" class="material-symbols-outlined modal-header__icon">
                            cancel
                        </span>
                        
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <p>
                                 {{ descModal }}
                                
                            </p>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <ButtonComponent>

                            <button class="button" type="button" @click.prevent="close">Close</button>
                        </ButtonComponent>
                        
                    </div>
                </div>
            </div>

        </div>
    </transition>


</template>

<script setup>
/*
props 
*/
const props = defineProps({
    open: {
        type: Boolean,
        required: true,
    },
    title: {
        type: String,
        required: true,
        
    },
    descModal: {
        type: String,
        required: true,
        
    }
})
/*
emits
*/ 
const emit = defineEmits(['close'])
const close = () => {
    emit('close')
}

</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);

    overflow: hidden;

    &-wrapper {
        position: relative;
        top: 50%;
        transform: translateY(-50%);

    }
    &-container {
        position: relative;
        width: 400px;
        height: 100%;
        margin: 0 auto;
        border: 2px solid black;
        border-radius: 10px;
        box-shadow: 0 2px 8px var(--crl);
        background-color: var(--crl);
        transition: all 0.3s ease;
    }
    &-header {
        width: 100%;
        padding: 0.7em 0.5em;
        font-weight: bold;
        color: var(--text-white);
        border-bottom: 2px solid black;
        background-color: var(--btn);
        display: flex;
        justify-content: space-between;
        &__icon {
            cursor: pointer;
            transition: transform .2s ease-in;
            &:hover {
                transform: scale(1.1);
            }
        }
    }
    &-body {
        margin: 1.5em 2em;
    }
    &-footer {
        margin: 1.5em 2em;

    }
    .button {
        padding: 0.5em 1em;
        border: none;
        border-radius: 10px;
        font-weight: bold;
        transition: all .4s ease-in-out;
        border: 1px solid var(--btn);
        &:hover {
            background-color: rgb(0, 0 , 0);
            color: rgb(255, 255, 255);
        }
    } 
}
.modal-enter-from {
    transform: scale(1.1);
    opacity: 1;
}

.modal-leave-to {
    transform: scale(1);
    opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
    transition: all 0.4s ease-in;
}

</style>