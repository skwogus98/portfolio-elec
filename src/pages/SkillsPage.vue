<template>
    <div>
        <div class="bgimg">
            <router-link class="h-12 absolute top-80" to="/Projects"><img src="../img/left-arrow.png" class="h-12" alt="" /></router-link>
            <router-link class="h-12 absolute top-80 right-arrow" to="/Contact"
                ><img src="../img/right-arrow.png" class="h-12 animate-bounce" alt=""
            /></router-link>
            <div class="w-screen h-screen py-24 px-12 flex">
                <div class="w-44 mx-8 text-4xl border-r-2 pr-6 border-gray-500">Skills</div>
                <SkillChart :data="data" :options="options"></SkillChart>
            </div>
        </div>
    </div>
</template>
<script>
import SkillChart from '@/components/SkillChart.vue';


export default {
    components:{
        SkillChart
    },
    data() {
        return {
            data: {
                labels: ["Vue.js", "React.js", "Spring Boot", "Node.js"],
                datasets: [
                    {
                        backgroundColor: ["#42B883", "#61DBFB", "#6AAE77", "#3C873A"],
                        borderRadius: Number.MAX_VALUE,
                        data: [85, 60, 60, 70],
                    },
                ],
            },
            options: {
                responsive: true,
                indexAxis: "y",
                scales: {
                    x: {
                        min: 0,
                        max: 100,
                    },
                },
            },
        }
    },
};
</script>
<style></style>
