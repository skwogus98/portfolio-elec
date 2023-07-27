<template>
    <div>
        <div class="bgimg">
            <router-link class="h-12 absolute top-80" to="/Career"><img src="../img/left-arrow.png" class="h-12" alt="" /></router-link>
            <router-link class="h-12 absolute top-80 right-arrow" to="/Skills"
                ><img src="../img/right-arrow.png" class="h-12 animate-bounce" alt=""
            /></router-link>
            <div class="w-screen h-screen py-24 px-12 flex">
                <div class="w-44 mx-8 text-4xl border-r-2 pr-6 border-gray-500">Projects</div>
                <div class="flex w-full flex-col overflow-y-scroll">
                    <project-card title="여기모여" subtitle="배달 음식 공동구매를 위한 커뮤니티" @click="showModal(0)">
                        <img src="../img/여기모여.jpg" alt="" class="h-32 w-60" />
                    </project-card>
                    <project-card
                        title="도서관리 시스템"
                        subtitle="사용자가 서점에 있는 도서들을 가격, 제목, 장르에 따라 검색할 수 있고 정보를 확인 할 수 있는 시스템"
                        @click="showModal(1)"
                    >
                        <img src="../img/도서관리.jpg" alt="" class="h-32 w-60" />
                    </project-card>
                    <project-card
                        title="서울시 실시간 지하철 경로 및 혼잡도 시각화 서비스"
                        subtitle="서울시의 지하철 경로를 탐색하고 해당 경로의 지하철에 혼잡도를 예측하고 실시간 혼잡도를 파악할 수 있는 시스템"
                        @click="showModal(2)"
                    >
                        <img src="../img/지하철.png" alt="" class="h-32 w-60" />
                    </project-card>
                    <project-card
                        title="시계열 데이터를 활용한 실시간 공장데이터 시각화 서비스 구축"
                        subtitle="공장의 데이터를 수집하여 사용자가 원하는 정보를 확인할 수 있는 대시보드를 만들 수 있는 웹 어플리케이션"
                        @click="showModal(3)"
                    >
                        <img src="../img/공장시각화.jpg" alt="" class="h-32 w-60" />
                    </project-card>
                </div>
            </div>
        </div>
        <div v-if="onModal" class="fixed top-0 left-0 w-screen h-screen p-24 bg-black bg-opacity-75 flex justify-center items-center z-30">
            <div class="bg-white p-4 pb-8 pt-0 rounded-lg modal-content">
                <div class="flex justify-end pb-2 mb-4 border-b-4">
                    <button @click="onModal = false" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                </div>
                <span v-html="details[selectedModal]"></span>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            details: [
                "교내 팀 프로젝트에서 배달 음식 공동구매를 위한 커뮤니티를 개발하였습니다.<br><br>저는 이 프로젝트에서 Vue.js와 Bootstrap을 이용한 UI/UX 개발과 외부 API(카카오 지도 API, 다음 우편번호 API, SGIS open API)를 프로젝트에 적용하여 방 만들기와 방 찾기를 위한 위치 정보를 제공하는 서비스를 개발하였습니다.<br><br>- geoLocation 모듈을 통해 얻은 사용자의 위치 정보를 카카오 지도 API를 통해 현재 한국에서 사용하는 주소명으로 변환하고 이를 지도로 도식화를 시켰습니다.<br>- 시 군 구 단위의 검색 필터링을 하기 위해 SGIS open API를 활용하여 시 군 구의 행정구역 정보를 받아와서 선택할 수 있도록 하였습니다.<br>- 배달받을 정확한 위치를 검색할 수 있도록 다음 우편번호 API를 활용하여 정확한 주소명을 검색할 수 있도록 하였습니다.<br><br><a href='https://github.com/phdljr/GraduationWork'>https://github.com/phdljr/GraduationWork</a>",
                "도서관리 시스템 <br><br> - 사용자가 서점에 있는 도서들을 가격, 제목, 장르에 따라 검색할 수 있고 정보를 확인 할 수 있는 시스템<br> - 관리자는 서점에 도서를 등록, 삭제 및 갱신 할 수 있음.<br> - 사용 기술: React, Next.js, tailwindcss, Java SpringBoot, JPA, MariaDB<br><br><a href='https://github.com/skwogus98/webKit-project'>https://github.com/skwogus98/webKit-project</a>",
                "서울시 실시간 지하철 경로 및 혼잡도 시각화 서비스<br><br> - 서울시의 지하철 경로를 탐색하고 해당 경로의 지하철에 혼잡도를 예측하고 실시간 혼잡도를 파악할 수 있는 시스템<br> - SK open API 지하철 혼잡도와 공공데이터 포털의 서울교통공사 수도권 도시철도 경로탐색을 활용하여 데이터를 도식화<br> - 사용 기술: React, Next.js, tailwindcss, Java SpringBoot, JPA, MariaDB<br><br><a href='https://github.com/skwogus98/subway-congestion-provider'>https://github.com/skwogus98/subway-congestion-provider</a>",
                "시계열 데이터를 활용한 실시간 공장데이터 시각화 서비스 구축<br><br> - 테이큰소프트와 진행한 기업연계 프로젝트입니다.<br> - 공장의 데이터를 수집하여 사용자가 원하는 정보를 확인할 수 있는 대시보드를 만들 수 있는 웹 어플리케이션을 개발하였습니다.<br> - 사용 기술: Vue.js, Webpack, Java SpringBoot, JPA, Postagre<br><br><a href='https://github.com/taken-soft/Frontend'>https://github.com/taken-soft/Frontend</a>",
            ],
            onModal: false,
            selectedModal: 0,
        };
    },
    methods: {
        showModal(num) {
            this.onModal = true;
            this.selectedModal = num;
        },
    },
};
</script>
<style scoped>
@keyframes slideDown {
    0% {
        transform: translateY(0%);
        opacity: 0;
    }
    100% {
        transform: translateY(100%);
        opacity: 1;
    }
}

.modal-content {
    animation: slideUp 1s ease-in-out;
}
</style>
