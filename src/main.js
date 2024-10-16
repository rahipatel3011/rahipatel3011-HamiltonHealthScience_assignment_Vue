import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useFormState } from './composables/useFormState'

const app = createApp(App)
app.provide('formState', useFormState())
app.use(router)

app.mount('#app')
