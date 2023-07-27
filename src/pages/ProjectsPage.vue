<template>
    <div>
        <div class="bgimg">
            <router-link class="h-12 absolute top-80" to="/Career"><img src="../img/left-arrow.png" class="h-12" alt="" /></router-link>
            <router-link class="h-12 absolute top-80 right-arrow" to="/Skills"
                ><img src="../img/right-arrow.png" class="h-12 animate-bounce" alt=""
            /></router-link>
            <div class="w-screen h-screen py-24 px-12 flex">
                <div class="w-44 mx-8 text-4xl border-r-2 pr-6 border-gray-500">Projects</div>
                <div class="flex w-full flex-col overflow-scroll">
                    <project-card title="여기모여" subtitle="배달 음식 공동구매를 위한 커뮤니티">
                        <img src="../img/여기모여.jpg" alt="" class="h-32 w-60">
                    </project-card>
                    <project-card title="도서관리 시스템" subtitle="사용자가 서점에 있는 도서들을 가격, 제목, 장르에 따라 검색할 수 있고 정보를 확인 할 수 있는 시스템">
                        <img src="../img/도서관리.jpg" alt="" class="h-32 w-60">
                    </project-card>
                    <project-card title="서울시 실시간 지하철 경로 및 혼잡도 시각화 서비스" subtitle="서울시의 지하철 경로를 탐색하고 해당 경로의 지하철에 혼잡도를 예측하고 실시간 혼잡도를 파악할 수 있는 시스템">
                        <img src="../img/지하철.png" alt="" class="h-32 w-60">
                    </project-card>
                    <project-card title="시계열 데이터를 활용한 실시간 공장데이터 시각화 서비스 구축" subtitle="공장의 데이터를 수집하여 사용자가 원하는 정보를 확인할 수 있는 대시보드를 만들 수 있는 웹 어플리케이션">
                        <img src="../img/공장시각화.jpg" alt="" class="h-32 w-60">
                    </project-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCard.vue';

export default {
    components:{
        ProjectCard
    }
};
</script>
<style></style>
