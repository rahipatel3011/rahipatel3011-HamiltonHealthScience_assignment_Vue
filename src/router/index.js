import AdditionalInfoView from '@/views/AdditionalInfoView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import PersonalInfoView from '@/views/PersonalInfoView.vue'
import Summary from '@/views/Summary.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
      name: 'HomeView'
    },
    {
    path: '/personal-info',
    component: PersonalInfoView,
    name: 'PersonalInfoView'
  },{
    path: "/additional-info",
    component: AdditionalInfoView,
    name: 'AdditionalInfoView'
  },
  {
    path: "/summary",
    component: Summary,
    name: 'summary'
  },
  {
    path:"/:catchAll(.*)",
    component: NotFoundView,
    name: "not-found"
  }
  ],
})

export default router
