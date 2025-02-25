import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createPinia } from 'pinia'
import router from './router/routes'
import 'toastify-js/src/toastify.css'
import { VueQueryPlugin, QueryClient } from 'vue-query'
import './assets/main.css'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import 'vue-loading-overlay/dist/css/index.css'
import { AllCommunityModule, ModuleRegistry, provideGlobalGridOptions } from 'ag-grid-community'
import { AgGridVue } from 'ag-grid-vue3'
import { configure } from 'vee-validate'
ModuleRegistry.registerModules([AllCommunityModule])

provideGlobalGridOptions({ theme: 'legacy' })

configure({
  validateOnBlur: true, // Validate on blur event
  validateOnChange: true, // Validate on change event
  validateOnInput: false, // Disable validation on input event
  validateOnModelUpdate: true, // Validate on model updates
})

const queryClient = new QueryClient()

const vuetify = createVuetify()
const pinia = createPinia()
const app = createApp(App)

app.component('ag-grid-vue', AgGridVue)
app.use(vuetify)
app.use(pinia)
app.use(router)
app.use(VueQueryPlugin)
app.mount('#app')
