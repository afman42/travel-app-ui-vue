import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path:"/",
        name: 'Home',
        component: () => import('../views/HomePage.vue'),
    },
    {
        path:"/:id",
        name:"HomeId",
        component: () => import('../views/HomeIdPage.vue'),
    },
    {
        path:"/likes",
        name:"Likes",
        component: () => import('../views/LikesPage.vue'),
    },
    {
        path:"/profile",
        name:"Profile",
        component: () => import('../views/ProfilePage.vue'),
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router