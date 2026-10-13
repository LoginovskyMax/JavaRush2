import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.directive('color-comp', (el, binding) => {
    console.log(binding);
    el.style.color = binding.value
})

app.mount('#app')
