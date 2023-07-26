<template>
    <div class="bgimg">
        <router-link class="h-12 absolute top-80" to="/"><img src="../img/left-arrow.png" class="h-12 hover:animate-bounce" alt=""></router-link>
        <router-link class="h-12 absolute top-80 right-arrow" to="/Projects"><img src="../img/right-arrow.png" class="h-12 animate-bounce" alt=""></router-link>
        <div class="w-screen h-screen py-24 px-12 flex">
            <div class=" mx-8 text-4xl border-r-2 pr-6 border-gray-500">Career</div>
            <CareerGraph :careerList="careerList"></CareerGraph>
        </div>
    </div>
</template>
<script>
import CareerGraph from "../components/CareerGraph.vue";
export default {
    components: {
        CareerGraph,
    },
    data() {
        return {
            careerList: [
                {
                    type: "수상",
                    title: "한국정보기술학회 우수논문상",
                    date: "2022. 06. 03",
                    subtitle: "동상 수상<br>https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE11082611",
                },
                {
                    type: "교육",
                    title: "경북SW전문인재양성교육",
                    date: "2023. 01. ~ 2023. 06.",
                    subtitle: "Java SpringBoot, Javascript, React, Vue.js 등을 활용한 Full-stack 웹 개발 교육 참여<br>개인 프로젝트와 기업연계형 프로젝트에 참여",
                },
                {
                    type: "수상",
                    title: "SW전문인재양성사업 정보통신기획평가원장상",
                    date: "2023. 06. 09",
                    subtitle: "최우수상(정보통신기획평가원장상)수상<br>https://www.etnews.com/20230619000297",
                },
                {
                    type: "자격증",
                    title: "정보처리기사",
                    date: "2023. 06. 09",
                    subtitle: "",
                },
                {
                    type: "교육",
                    title: "금오공과대학교 컴퓨터공학과 졸업",
                    date: "2017. 03. ~ 2023. 08.",
                    subtitle: "",
                },
            ],
        };
    },
};
</script>
<style>
.right-arrow{
    left: calc(100% - 3rem);
}
</style>
