import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false;

library.add(faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
