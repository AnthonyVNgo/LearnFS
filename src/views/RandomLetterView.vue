<template>
  <h1>Random Letter</h1>
  <!-- <p v-if="randomLetter === ''">Press the button</p> -->
  <!-- <p v-else>{{randomLetter}}</p> -->
  <p>{{randomLetter}}</p>

  <!-- <button @click="getRandomLetter">
    get random letter
  </button> -->
</template>

<script setup>
import { ref,   
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured } from 'vue';
const randomLetter = ref('')

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter.value = alphabet[Math.floor(Math.random() * alphabet.length)]
}

// onMounted(getRandomLetter())

    onBeforeMount(() => {
      console.log("Before Mount!");
      getRandomLetter()
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
</script>

<style scoped>
</style>