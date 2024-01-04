import { createRouter, createWebHistory } from 'vue-router'

import store from "../store/store";
import {
  LOADING_SPINNER_SHOW_MUTATION,
} from "../store/storeconstants";

import HomeView from '../Updated_src/views/home.vue'
import DemoView from '../Updated_src/views/Demo.vue'
import ModulesView from '../views/ModulesView.vue'
import FaQ from '../views/FAQ.vue'
import ContactUS from '../views/Contact.vue'
import PolicyVue from '@/views/Policy.vue'
import DeleteAccount from '@/views/Delete.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/demo',
    name: 'demo',
    component: DemoView
  },
  {
    path: '/modulesview',
    name: 'ModulesView',
    component: ModulesView
  },
  {
    path: '/FAQ',
    name: 'FAQ',
    component: FaQ
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUS
  },
  {
    path: '/myhospitulpolicy',
    name: 'PolicyPage',
    component: PolicyVue
  },
  {
    path: '/delete-account',
    name: 'DeleteAccount',
    component: DeleteAccount
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  async scrollBehavior() {
    store.commit(LOADING_SPINNER_SHOW_MUTATION, true);
      await new Promise(r=>setTimeout(r,2000));
        store.commit(LOADING_SPINNER_SHOW_MUTATION, false);
      document.getElementById('home').scrollIntoView({behavior:'smooth'});
 }

})

export default router
