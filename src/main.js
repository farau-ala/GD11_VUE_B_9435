import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

Vue.prototype.$http = Axios; 
Vue.prototype.$apiUrl = 'http://127.0.0.1:8080/GD11_9435_B/modul11/index.php';

Vue.config.productionTip = false

new Vue({ 
  render: h => h(App), 
  router, 
  vuetify, 
  components: { App } 
}).$mount('#app')