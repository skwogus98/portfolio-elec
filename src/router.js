import { createRouter, createWebHistory } from "vue-router";
import Introduce from "./pages/IntroducePage.vue";
import Career from "./pages/CareerPage.vue";

const routes = [
    {
        path: "/",
        name: "introduce",
        component: Introduce,
    },
    {
        path: "/Career",
        name: "career",
        component: Career,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
