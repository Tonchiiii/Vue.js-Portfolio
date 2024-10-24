import { createRouter, createWebHistory } from 'vue-router'; 
import UserLogin from '../components/UserLogin.vue'; 
import AdminLayout from '../views/AdminLayout.vue'; 
import DashBoard from '../components/DashBoard.vue'; 
import PortfolioShowcase from '@/components/PortfolioShowcase.vue';
import MyWork from '../components/MyWork.vue';
import ContactPage from '@/components/ContactPage.vue';

// Define your routes
const routes = [
  { path: '/', component: UserLogin },
  { path: '/dashboard', component: DashBoard },
  { path: '/portfolio_showcase', component: PortfolioShowcase },
  { path: '/mywork', component: MyWork },
  { path: '/contact', component: ContactPage },
  { path: '/admin', component: AdminLayout, 
    children: [
      { path: 'dashboard', component: DashBoard }
    ]
  }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check login status
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  // If not logged in, redirect to the login page, except for the login route
  if (!isLoggedIn && to.path !== '/') {
    next('/');
  } else {
    next();
  }
});

export default router;
