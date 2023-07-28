<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style>
@font-face { font-family: 'NanumBarunGothic';
src: url('./fonts/NanumBarunGothic.eot');
src: url('./fonts/NanumBarunGothic.eot') format('embedded-opentype'),
url('./fonts/NanumBarunGothic.woff') format('woff');}

#app {
    font-family: 'NanumBarunGothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.bgimg{
    background-image: url("./img/background.avif");
    background-size: cover;
}
</style>
