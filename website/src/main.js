import './assets/main.css'

import { createApp } from 'vue'
import { Amplify } from 'aws-amplify'
import outputs from '../amplify_outputs.json'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

Amplify.configure(outputs)