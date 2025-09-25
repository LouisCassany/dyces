<template>
  <Page orientation="portrait"
    class="m-4 print:m-0 rounded-lg print:rounded-none flex flex-col p-[5mm] bg-white text-black font-sans">
    <!-- Header -->
    <div class="flex w-full gap-8 mb-4">
      <div class="aspect-square self-stretch w-1/3">
        <img src="/public/necromancer.png" class="h-full w-full object-cover rounded-lg border border-gray-400" />
      </div>
      <div class="w-full flex flex-col gap-3">
        <div class="text-[1.5cm] font-bold text-black">
          {{ characters[3]?.name }}
        </div>
        <div class="text-sm italic">
          {{ characters[3]?.flavor }}
        </div>
        <div class="border h-full flex flex-col p-4 gap-2">
          <div class="text-lg">
            Status effects:
          </div>
          <div class="w-full h-full grid grid-cols-2 grid-rows-2 gap-2">
            <div v-for="s in statusEffect" class="flex items-center gap-2">
              <Box />
              <div>
                {{ s }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-between gap-2">
      <div v-for="j in 2" class="flex w-full justify-between">
        <Box v-for="i in 15" class="bg-red-200">
          {{ (j - 1) * 15 + i }}
        </Box>
      </div>
    </div>
  </Page>
</template>


<script lang="ts" setup>
import Page from './components/Page.vue'
import Box from './components/Box.vue'
import { characters } from "./characters";

const statusEffect = ["Shield", "Poison", "Burn", "Stun"];
</script>