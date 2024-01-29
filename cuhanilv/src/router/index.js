import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import SocialView from '../views/SocialView.vue'
import ForgotPassView from '../views/ForgotPassView.vue'
import NewsView from '../views/NewsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/ForgotPass',
      name: 'ForgotPass',
      component: ForgotPassView
    },
    
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/friends',
      name: 'friends',
      component: SocialView
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView
    }
  ]
})

export default router
