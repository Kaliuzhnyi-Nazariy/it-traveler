import { createRouter, createWebHistory } from 'vue-router'

const GreetPage = () => import('../views/GreetingView.vue')
const HomePage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../views/LoginView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')
import { authService } from '@/authService/authService'

const routes = [
  { path: '/', component: GreetPage, name: 'greeting' },
  { path: '/map', component: HomePage, name: 'homepage' },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'registration', component: RegistrationPage, name: 'registration' }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const { name } = to

  if (authService.isLoggedIn() && authRoutes.includes(name)) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    next({ name: 'login' })
  } else {
    next()
  }
})
