import { createApp } from 'vue'
import App from './App.vue'
import TheNavbar from './components/TheNavbar'
import AppUserGetter from './components/AppUserGetter'
import AppBtn from './components/AppBtn'
import TheUsersList from './components/TheUsersList'
import AppPreloader from './components/AppPreloader'
import AppUserAvatar from './components/AppUserAvatar'
import AppUserCard from './components/AppUserCard'

const app = createApp(App)

app.component('the-navbar', TheNavbar)
app.component('app-user-getter', AppUserGetter)
app.component('app-btn', AppBtn)
app.component('the-users-list', TheUsersList)
app.component('app-preloader', AppPreloader)
app.component('app-user-avatar', AppUserAvatar)
app.component('app-user-card', AppUserCard)
app.mount('#app')
