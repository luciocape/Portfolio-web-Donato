import './assets/bootstrap-custom.scss';
import './theme'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import bootstrap from 'bootstrap/dist/js/bootstrap.js'
import { createI18n } from 'vue-i18n';
import languagePreference from './languagePreference';


const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    messages: languagePreference,
    falltbackformat: 'es',
    locale: navigator.language.startsWith('en') ? 'en' : 'es',
})
const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
