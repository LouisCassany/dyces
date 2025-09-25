<template>
    <div class="A4page bg-white w-[297mm] h-[210mm]" v-if="orientation === 'landscape'">
        <slot />
    </div>
    <div class="A4page bg-white h-[297mm] w-[210mm]" v-else>
        <slot />
    </div>
</template>

<script lang="ts" setup>

defineProps<{
    orientation: "portrait" | "landscape"
}>()

</script>