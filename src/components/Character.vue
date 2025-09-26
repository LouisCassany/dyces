<template>
    <div class="flex w-full gap-8 mb-4">
        <div class="aspect-square self-stretch w-1/3">
            <img :src="`/${character.name}.png`" class="h-full w-full object-cover rounded-lg border-2 shadow-lg"
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
        <Box v-for="i in character.maxCp" :key="i" class="bg-blue-200"
            :class="{ 'bg-blue-500': i === character.startingCP }">
            {{ i }}
        </Box>
        <div class="rounded-lg p-2 border-2 font-bold font-mono flex items-center justify-center" :style="{
            borderColor: character.color,
            color: character.color,
            gridColumn: `span ${15 - character.maxCp}`
        }">
            {{ character.defense }}
        </div>
    </div>

    <div class="flex w-full h-full gap-2 mt-4">
        <div class="w-7/12 flex flex-col h-full gap-2">
            <div v-for="ability in character.abilities" :key="ability.name" class="rounded-lg p-2 flex flex-col gap-2"
                :style="{ backgroundColor: character.color, color: 'white' }">
                <div class="text-lg font-bold">
                    {{ ability.name }}
                </div>
                <div v-for="level in ability.levels" class="flex items-center w-full justify-between gap-4">
                    <div class="flex gap-2">
                        <div v-for="array in level.requirement" class="flex w-full gap-2">
                            <Dice v-for="diceNbr in array[0]" :key="diceNbr">
                                {{ array[1] }}
                            </Dice>
                        </div>
                    </div>
                    <div>
                        {{ level.effect }}
                    </div>
                </div>
            </div>
        </div>

        <div class="w-5/12 flex flex-col h-full gap-2">
            <div class="rounded-lg p-2 border-2" :style="{ borderColor: character.color, color: character.color }">
                {{ character.passive }}
            </div>

            <div v-for="skill in character.cpEffects" :key="skill.name" class="rounded-lg p-2 flex flex-col gap-2"
                :style="{ backgroundColor: character.color, color: 'white' }">
                <div class="flex justify-between w-full">
                    <div class="flex flex-col">
                        <div class="text-lg font-bold">
                            {{ skill.name }}
                        </div>
                        <div>
                            {{ skill.effect }}
                        </div>
                    </div>

                    <div
                        class="border-2 border-white p-2 rounded-full text-xl size-10 flex justify-center items-center">
                        {{ skill.cost }}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>


<script lang="ts" setup>
import { type Character } from "../characters";
import Dice from "./Dice.vue";
import Box from "./Box.vue";

defineProps<{
    character: Character;
}>();

const statusEffect = ["Shield", "Poison", "Burn", "Stun"];
</script>