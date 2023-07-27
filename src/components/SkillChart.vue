<template lang="">
    <div>
        <div class="text-lg my-6 px-4">- 기술 이해도</div>
        <Bar class="relative" :data="data" :options="options" :style="chartStyle"></Bar>
    </div>
</template>
<script>
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale } from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);
export default {
    components: {
        Bar,
    },
    props: ["data", "options"],
    data() {
        return {
            chartStyle:{
                height: "250px",
                width: "700px"
            }
        }
    },
};
</script>
<style></style>
