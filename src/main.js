import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ButtonComponent from './components/ButtonComponent.vue'

const app = createApp(App)
app.component('button-component', ButtonComponent)
app.use(createPinia())
app.use(router)

app.mount('#app')
