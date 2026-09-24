import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Lara from '@primeuix/themes/lara'

import Toolbar from 'primevue/toolbar'
import Card from 'primevue/card'
import Button from 'primevue/button'
import SelectButton from 'primevue/selectbutton'
import Listbox from 'primevue/listbox'
import Tag from 'primevue/tag'

import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import i18n from './i18n'

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Lara
    }
})

app.use(i18n)

app.component('pv-toolbar', Toolbar)
app.component('pv-card', Card)
app.component('pv-button', Button)
app.component('pv-select-button', SelectButton)
app.component('pv-list', Listbox)
app.component('pv-tag', Tag)

app.mount('#app')