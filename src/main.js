import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'

//Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCarSide, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faCarSide);

createApp(App).use(store).use(router).component("fa", FontAwesomeIcon).mount('#app')
