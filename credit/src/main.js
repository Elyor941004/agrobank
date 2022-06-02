import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import allComponents from '@/components/UI'
import setAuthHeader from "@/utils/setAuthHeader";

const app = createApp(App)
if (localStorage.token){
    setAuthHeader(localStorage.token);
} else{
    setAuthHeader(false)
}
allComponents.forEach(component=>{
    app.component(component.name, component);
})
app.use(store).use(router).mount('#app')