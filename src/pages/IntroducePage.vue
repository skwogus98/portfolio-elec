<template>
    <div class="w-screen h-screen">
        <img src="../img/main.png" class="w-screen h-screen absolute brightness-75" />
        <div class="absolute top-72 w-full text-center text-gray-50 px-40">
            <p class="text-3xl">새로운 도전을 즐기고 지속적인 학습을 추구하는 나재현 입니다.</p>
            <p class="mt-10 text-xl">프론트엔드와 백엔드 개발자를 지망하고있습니다. 최신 기술의 활용과 학습을 즐깁니다.</p>
            <div class="flex pt-32 justify-center">
                <router-link to="/career"><img src="../img/arrow-down.png" class="h-12 animate-bounce" alt=""></router-link>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
};
</script>
<style></style>
