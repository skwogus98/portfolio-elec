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
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

#app {
    font-family: 'Nanum Gothic', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.bgimg{
    background-image: url("./img/background.avif");
    background-size: cover;
}
</style>
