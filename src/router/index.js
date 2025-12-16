import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import DashboardLayout from '../components/DashboardLayout.vue'

// Lazy loading views
const ProfileView = () => import('../views/ProfileView.vue')
const ShowcaseView = () => import('../views/ShowcaseView.vue')
const ContactView = () => import('../views/ContactView.vue')
const CreativeView = () => import('../views/CreativeView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginView },
    {
      path: '/portfolio',
      component: DashboardLayout,
      children: [
        { path: 'profile', component: ProfileView },
        { path: 'showcase', component: ShowcaseView },
        { path: 'contact', component: ContactView },
        { path: 'creative', component: CreativeView }
      ]
    }
  ]
})

export default router