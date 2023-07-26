<template>
    <div>
        <!-- 수상, 교육, 자격증 -->
        <div class="h-full flex-1 flex relative">
            <!-- 세로선 -->
            <div class="h-full w-3 bg-slate-300 rounded-full absolute left-1"></div>
            <div class="flex flex-col justify-center">
                <!-- 컴포넌트 -->
                <div class="w-full flex mb-8" v-for="(career, index) in careerList" :key="index">
                    <div class="flex" v-if="career.type == '수상'">
                        <div class="w-5 h-5 bg-yellow-200 rounded-full left-8 z-50 mt-2"></div>
                        <div class="h-3 w-24 bg-yellow-200 mt-3 mr-4"></div>
                    </div>
                    <div class="flex" v-if="career.type == '교육'">
                        <div class="w-5 h-5 bg-blue-200 rounded-full left-8 z-50 mt-2"></div>
                        <div class="h-3 w-24 bg-blue-200 mt-3 mr-4"></div>
                    </div>
                    <div class="flex" v-if="career.type == '자격증'">
                        <div class="w-5 h-5 bg-green-200 rounded-full left-8 z-50 mt-2"></div>
                        <div class="h-3 w-24 bg-green-200 mt-3 mr-4"></div>
                    </div>
                    <div class="text-sm">
                        <div class="text-2xl flex">
                            <div class="bg-yellow-200 text-gray-500 rounded-xl w-fit p-1" v-if="career.type == '수상'">
                                <span v-html="career.type"></span>
                            </div>
                            <div class="bg-blue-200 text-gray-500 rounded-xl w-fit p-1" v-if="career.type == '교육'">
                                <span v-html="career.type"></span>
                            </div>
                            <div class="bg-green-200 text-gray-500 rounded-xl w-fit p-1" v-if="career.type == '자격증'">
                                <span v-html="career.type"></span>
                            </div>
                            <span class="pt-1 ml-3" v-html="career.title"></span>
                        </div>
                        <p v-html="career.date"></p>
                        <span v-html="career.subtitle"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    props: ["careerList"],
};
</script>
<style></style>
