<template>
    <div>
        <div class="flex static border-gray-300 border rounded-lg p-4 justify-between mb-6">
            <div class="pr-4">
                <div class="text-3xl mb-4">{{ title }}</div>
                <div class="text-sm">{{ subtitle }}</div>
            </div>
            <slot> </slot>
        </div>
    </div>
</template>
<script>
export default {
    props: ["title", "subtitle"],
};
</script>
<style></style>
