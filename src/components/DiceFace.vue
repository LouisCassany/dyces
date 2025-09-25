<script lang="ts" setup>
import { ref } from 'vue'

const diceValue = ref(2) // You can update this dynamically

// Map dice value to dots positions
const diceDots: Record<number, string[]> = {
    1: ['center'],
    2: ['top-left', 'bottom-right'],
    3: ['top-left', 'center', 'bottom-right'],
    4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
    6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
}

// Dot position classes
const dotPositions: Record<string, string> = {
    'top-left': 'absolute top-1 left-1',
    'top-right': 'absolute top-1 right-1',
    'middle-left': 'absolute top-1/2 -translate-y-1/2 left-1',
    'middle-right': 'absolute top-1/2 -translate-y-1/2 right-1',
    'bottom-left': 'absolute bottom-1 left-1',
    'bottom-right': 'absolute bottom-1 right-1',
    'center': 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
}
</script>

<template>
    <div class="relative flex justify-center items-center rounded-lg">
        <div v-for="dot in diceDots[diceValue]" :key="dot" class="rounded-full" :class="dotPositions[dot]"></div>
    </div>
</template>