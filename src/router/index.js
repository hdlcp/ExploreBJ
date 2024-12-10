import { createRouter, createWebHistory } from 'vue-router';
import VideoListPage from '@/views/VideoListPage.vue';  // Importez votre page de liste de vidéos
import recherchePage from '@/views/recherchePage.vue'; 
import welcome from '@/views/welcome.vue'; 
import welcometwo from '@/views/welcometwo.vue'; 
import AjoutVideo from '@/views/AjoutVideo.vue';
import PayementPage from '@/views/PayementPage.vue';
import AbonnePage from '@/views/AbonnePage.vue';
import LireVideo from '@/views/LireVideo.vue';

const routes = [
  {
    path: '/',  // La route principale pour la page d'accueil
    name: 'home',
    component: VideoListPage,  // La page que vous souhaitez afficher
  },

  {
    path: '/search',  // Une route pour une autre page
    name: 'recherche',
    component: recherchePage,  // La page à afficher
  },
  {
    path: '/welcome1',  // Une route pour une autre page
    name: 'bienvenue1',
    component: welcome,  // La page à afficher
  },
  {
    path: '/welcome2',  // Une route pour une autre page
    name: 'bienvenue2',
    component: welcometwo,  // La page à afficher
  },
  {
    path: '/ajout',  // Une route pour une autre page
    name: 'ajout',
    component: AjoutVideo,  // La page à afficher
  },
  {
    path: '/paymentFinal',  // Une route pour une autre page
    name: 'Payementfinal',
    component: PayementPage,  // La page à afficher
  },
  {
    path: '/Abonnement',  // Une route pour une autre page
    name: 'Abonnement',
    component: AbonnePage,  // La page à afficher
  },
  {
    path: '/LireVid',  // Une route pour une autre page
    name: 'LireVid',
    component: LireVideo,  // La page à afficher
  },
  // Ajoutez d'autres routes selon vos besoins
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
