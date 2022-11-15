<template>
<div class="container" @keydown="handleKeyDown">
  <div class="row">
    <div class="col">
      <div class="card ratio ratio-1x1">
        <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
          <span style="font-size: 100px">{{randomLetter}}</span>
        </div>
      </div>

      <div class="row justify-content-center">
        <div class="col-auto">
          <input type="text" class="form-control form-control-lg" id="" v-model="inputLetter" maxlength="1">
        </div>
        <div class="col-auto">
          <button type="button" class="btn btn-dark" @click="getRandomLetter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
      </div>
      
      <div class="row">
        <div class="col">
          <h3>Match the fingerspelling card with the correct letter</h3>
        </div>
      </div>

    </div>
  </div>
</div>
  
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
  onErrorCaptured,
  watch } from 'vue';

let randomLetter = $ref('')

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

let inputLetter = ref('')

function handleKeyDown(event) {
  if (event.which >= 65 && event.which <= 90) {
    inputLetter.value = event.key
  }
}

watch(inputLetter, (newValue, oldValue) => {
  if (newValue === randomLetter) {
    getRandomLetter()
    inputLetter.value = ''
  }
})


onBeforeMount(() => {
  getRandomLetter()
});

// beforeDestroy() {
// 	window.removeEventListener('keypress', this._keyListener);
// },

  // onBeforeMount(() => {
  //   console.log("Before Mount!");
  // });
  // onMounted(() => {
  //   console.log("Mounted!");
  // });
  // onBeforeUpdate(() => {
  //   console.log("Before Update!");
  // });
  // onUpdated(() => {
  //   console.log("Updated!");
  // });
  // onBeforeUnmount(() => {
  //   console.log("Before Unmount!");
  // });
  // onUnmounted(() => {
  //   console.log("Unmounted!");
  // });
  // onActivated(() => {
  //   console.log("Activated!");
  // });
  // onDeactivated(() => {
  //   console.log("Deactivated!");
  // });
  // onErrorCaptured(() => {
  //   console.log("Error Captured!");
  // });
</script>

<style scoped>
</style>