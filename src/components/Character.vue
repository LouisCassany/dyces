<template>
    <div class="flex w-full gap-8 mb-4">
        <div class="aspect-square self-stretch w-1/3">
            <img :src="`/public/${character.name}.png`" class="h-full w-full object-cover rounded-lg border-2 shadow-lg"
                :style="{
                    borderColor: character.color,
                    boxShadow: `0 0 10px ${character.color}`
                }" />
        </div>
        <div class="w-full flex flex-col gap-3">
            <div>
                <div class="text-[1.5cm] font-bold" :style="{ color: character.color }">
                    {{ character.name }}
                </div>
                <div class="text-sm italic" :style="{ color: character.color }">
                    {{ character.flavor }}
                </div>
            </div>
            <div class="border h-full flex flex-col p-2 gap-2 rounded-lg">
                <div class="text-lg" :style="{ color: character.color }">
                    Status effects:
                </div>
                <div class="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
                    <div v-for="s in statusEffect" class="flex items-center gap-2" :key="s">
                        <Box />
                        <div :style="{ color: character.color }">
                            {{ s }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-[repeat(15,_1fr)] gap-1">
        <Box v-for="i in 30" :key="i"
            :class="{ 'bg-red-200': i !== character.health, 'bg-red-500': i === character.health }">
            {{ i }}
        </Box>
        <Box v-for="i in 5" :key="i" class="bg-blue-200">
            {{ i }}
        </Box>
    </div>

    <div class="flex w-full h-full gap-2 mt-4">
        <div class="w-1/2 flex flex-col justify-between h-full gap-2">
            <div v-for="skill in character.abilities" :key="skill.name" class="rounded-lg p-2 flex flex-col gap-2"
                :style="{ backgroundColor: character.color, color: 'white' }">
                <div class="text-lg font-bold">
                    {{ skill.name }}
                </div>
                <div v-for="level in skill.levels" :key="level.requirement">
                    <div class="text-lg">
                        {{ level.requirement }}
                    </div>
                    <div>
                        {{ level.effect }}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-1/2 flex flex-col justify-between h-full gap-2">
            <div v-for="skill in character.cpEffects" :key="skill.name"
                class="rounded-lg p-2 flex flex-col gap-2 h-full"
                :style="{ backgroundColor: character.color, color: 'white' }">
                <div class="text-lg font-bold">
                    {{ skill.name }}
                </div>
                <div>
                    {{ skill.cost }}
                </div>
                <div>
                    {{ skill.effect }}
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { type Character } from "../characters";
import Box from "./Box.vue";

defineProps<{
    character: Character;
}>();

const statusEffect = ["Shield", "Poison", "Burn", "Stun"];
</script>