import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).use(store).use(router).use(AOS).mount('#app')
