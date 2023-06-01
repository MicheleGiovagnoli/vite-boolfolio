//importo da vue-router le seguenti proprietà
import { createRouter, createWebHistory } from 'vue-router';
//importo i file che poi saranno le viste della mia single-page-application
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import PostList from './pages/PostList.vue';
import SinglePost from './pages/SinglePost.vue';

//Gestione delle pagine e caricamento di queste quando viene chiesto l'url
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',         //url richiesto
            name: 'Home',      //nome della rotta
            component: AppHome //componente da caricare
        },
        {
            path: '/contact',
            name: 'Contact',
            component: AppContact
        },
        {
            path: '/postList',
            name: 'PostList',
            component: PostList
        },
        {
            path: '/blog/:slug',
            name: 'single-post',
            component: SinglePost
        }
    ]
});

export { router };