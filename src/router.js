import { createRouter, createWebHistory } from "vue-router";
import Introduce from "./pages/IntroducePage.vue";
import Career from "./pages/CareerPage.vue";
import Projects from "./pages/ProjectsPage.vue";
import Skills from "./pages/SkillsPage.vue"
import Contact from "./pages/ContactPage.vue"

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
    {
        path: "/Projects",
        name: "Projects",
        component: Projects,
    },
    {
        path: "/Skills",
        name: "Skills",
        component: Skills,
    },
    {
        path: "/Contact",
        name: "Contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
