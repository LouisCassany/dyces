<template>
  <Page v-for="character in characters" orientation="portrait"
    class="m-4 print:m-0 rounded-lg print:rounded-none flex flex-col p-[5mm] bg-white text-black font-sans">
    <Character :character="character" />
  </Page>
</template>


<script lang="ts" setup>
import Page from './components/Page.vue'
import Character from './components/Character.vue'
import { characters } from "./characters"
</script>