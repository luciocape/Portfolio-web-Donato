import './assets/bootstrap-custom.scss';
import './theme'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'

const app = createApp(App)
app.use(bootstrap)
app.use(router)

app.mount('#app')
