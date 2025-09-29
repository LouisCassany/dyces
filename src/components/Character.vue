<template>
    <div class="flex flex-col gap-4">
        <div class="flex w-full gap-8">
            <div class="aspect-square self-stretch w-1/3">
                <img :src="`/${character.name}.png`" class="h-full w-full object-cover rounded-lg border-2 shadow-lg"
                    :style="{
                        borderColor: character.color,
                        boxShadow: `0 0 10px ${character.color}`
                    }" />
            </div>
            <div class="w-2/3 flex flex-col gap-3">
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
            <Box v-for="i in 15" :key="i" class="bg-blue-200" :class="{ 'bg-blue-500': i === character.startingCP }">
                {{ i }}
            </Box>
            <!-- <div class="rounded-lg p-2 border-2 font-bold font-mono flex items-center justify-center" :style="{
                borderColor: character.color,
                color: character.color,
                gridColumn: `span 15`
            }">
                {{ character.defense }}
            </div> -->
        </div>

        <div class="rounded-lg p-2 border-2 font-bold text-center"
            :style="{ backgroundColor: character.color, color: 'white' }">
            {{ character.passive }}
        </div>

        <div class="flex gap-4 w-full">

            <div class="w-1/2 flex flex-col h-full">
                <div class="p-2 text-2xl font-bold text-center">
                    Abilities
                </div>
                <div class="rounded-lg p-2 flex flex-col gap-2 my-1" v-for="a in character.abilities"
                    :style="{ backgroundColor: character.color, color: 'white' }">
                    <div class="text-xl font-mono font-bold flex justify-between">
                        <div>
                            {{ a.effect.split(": ")[0] }}
                        </div>
                        <div>
                            {{ a.req }}
                        </div>
                    </div>
                    <div>
                        {{ a.effect.split(": ")[1] }}
                    </div>
                </div>
            </div>

            <div class="w-1/2 flex flex-col h-full">
                <div class="p-2 text-2xl font-bold text-center">
                    Skills
                </div>
                <div v-for="skill in cPEffects" class="rounded-lg p-2 flex flex-col gap-2 border-2 my-1"
                    :style="{ borderColor: character.color, color: character.color }">
                    <div class="flex justify-between w-full">
                        <div class="flex flex-col">
                            <div class="text-lg font-bold">
                                {{ skill.effect.split(": ")[0] }}
                            </div>
                            <div class="pr-8">
                                {{ skill.effect }}
                            </div>
                        </div>

                        <div
                            class="border-2 border-white p-2 rounded-full aspect-square text-xl size-10 flex justify-center items-center">
                            {{ skill.cost }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2 font-bold" :style="{ color: character.color }">
            Defense: {{ character.defense.toLocaleLowerCase() }}
        </div>
    </div>
</template>


<script lang="ts" setup>
import { cPEffects, type Character, statusEffect } from "../characters";
import Dice from "./Dice.vue";
import Box from "./Box.vue";

defineProps<{
    character: Character;
}>();
</script>