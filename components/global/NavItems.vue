<template>
    <div
        class="flex flex-col justify-start gap-4 lg:flex-row lg:items-center h-full"
    >
        <GlobalNavItem label="Categories" :children="categories" />
        <GlobalNavItem label="Regions" :children="regions" />
        <GlobalNavItem label="Contact us" url="/contact" />
        <GlobalNavItem label="About" url="/about" />
    </div>
</template>

<script setup lang="ts">
const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];
const regions = ["Poland", "Poland 2", "Poland 3", "Poland 4"];
</script>

<style scoped>

</style>
