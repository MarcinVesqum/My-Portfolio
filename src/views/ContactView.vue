<template>
    <div class="contact section">
        <Modal 
        :open="modalData.showModal"
        :title="modalData.titleModal"
        :descModal="modalData.descModal"
        @close="toggleModal"
      />
        <div class="container">
            <div class="row">
                <div class="section__title padding-15">
                    <h2>Contact</h2>
                </div>
            </div>
            <h3 class="contact__title">Message to Me</h3>
            <div class="row">
                <div class="contact__info__item padding-15">
                    <div><ion-icon class="icons" name="call"></ion-icon></div>
                    <h4>Call Us On</h4>
                    <p>+ 48 695 701 713</p>
                </div>
                <div class="contact__info__item padding-15">
                    <div><ion-icon class="icons" name="mail"></ion-icon></div>
                    <h4>Text me message</h4>
                    <p>marcin.pelszykp@gmail.com</p>
                </div>
                <div class="contact__info__item padding-15">
                    <div><ion-icon class="icons" name="location"></ion-icon></div>
                    <h4>Location</h4>
                    <p>Białystok</p>
                </div>
            </div>
            <h4 class="contact__title">Send me message</h4>
            <div class="row">
                <div class="contact__form padding-15">
                    <div class="row">
                        <form ref="form" class="col-12" @submit.prevent="sendMail">
                            <div class="contact__form__item padding-15">
                                <div class="contact__form__group">
                                    <input :value="inputFieldReset"  class="contact__form__controle" type="text"  placeholder="Number">
                                </div>
                            </div>
                            <div class="contact__form__item padding-15">
                                <div class="contact__form__group">
                                    <input required :value="inputFieldReset"  class="contact__form__controle" type="email"  placeholder="Email">
                                </div>
                            </div>
                            <div class="contact__form__item padding-15">
                                <div class="contact__form__group">
                                    <input required :value="inputFieldReset"  class="contact__form__controle" type="text"  placeholder="Subject">
                                </div>
                        
                            </div>
                            
                            <div class="contact__form__item padding-15">
                                <div class="contact__form__group">
                                    <textarea required :value="inputFieldReset" class="contact__form__controle"  placeholder="Message"></textarea>
                                </div>
                            </div>
                            <div class="contact__form__item padding-15">
                                <ButtonComponent>
                                    <button class="button btn-msg" type="submit">Send Me</button>
                                </ButtonComponent>
                            </div>
                        </form>
                       
                    </div>
 
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import emailjs from 'emailjs-com';
import Modal from '@/components/Modal.vue'


const form = ref(null)
const inputFieldReset = ref(null)
const modalShow = ref(null)


/*
  show modal
*/
  const modalData = reactive({
    showModal: true,
    titleModal: 'Success!',
    descModal: `
      Thank you with your interest in my person.
      I will get back to you as soon as I can :)
    `
  })
  const toggleModal = () => {
    modalData.showModal = !modalData.showModal
  }

const sendMail = () => {
    emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        form.value, 
        import.meta.env.VITE_USER_ID
        )
    .then(() => {
        inputFieldReset.value = ''
        modalData.showModal = true
    }, (error) => {
        alert('Message not sent', error);
    }); 
}
    
</script>

<style lang="scss" scoped>
.col-6 {
    flex: 0 0 50%;
    max-width: 50%;
}
.col-12 {
    flex: 0 0 100%;
    max-width: 100%;
}
.btn-msg {
    height: 40px;
    padding: 0 50px;
}
.contact {
    &__title {
        text-align: center;
        font-size: 25px;
        margin-bottom: 20px;
        color: var(--btn);
    }
    &__info__item {
        flex: 0 0 33.33%;
        max-width: 33.33%;
        text-align: center;
        div {
            display: inline-block;
            .icon {
                font-size: 25px;
                color: var(--text-white);
            }
            h4 {
                font-size: 24px;
                font-weight: 700;
                color: var(--text-black);
                text-transform: capitalize;
                margin: 15px 0;
            }
            p {
                font-size: 16px;
                line-height: 25px;
                color: var(--text-black);
                font-weight: 400;
            }

        }

    }
    &__form {
        flex: 0 0 100%;
        max-width: 100%;
        &__item {
            margin-bottom: 40px;
        }
        &__controle {
            width: 100%;
            height: 50px;
            border-radius: 10px;
            background-color: var(--bg-black-100);
            border: 1px solid var(--bg-black-50);
            padding: 15px 25px;
            font-size: 16px;
            transition: all 0.3s ease-in-out; 
            &:focus {
                box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.15);
            }
        }
        textarea {
            height: 130px;
        }


        
    }

}
</style>