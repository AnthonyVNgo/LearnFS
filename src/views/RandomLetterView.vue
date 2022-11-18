<template>
<div class="container">
  <div class="row align-items-center" style="height: 50vh;">
    <div class="col">
      <div class="d-flex justify-content-center">
        <div class="card ratio ratio-1x1" style="max-width: 315px;">
          <img :src="`../../public/images/${randomLetter}.png`" :alt="randomLetter"  style="object-fit: contain;" class="card-body">
        </div>
      </div>
    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col" style="text-align: center; max-width: 400px;">
      <label for="randomLetter" class="form-label">
        <h5>Enter the correct Fingerspelling letter</h5>
      </label>
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control" id="randomLetter" v-model="inputLetter" maxlength="1" @keydown="handleKeyDown" placeholder="Type here">
        <button type="button" class="btn btn-dark" @click="getRandomLetter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- add streak counter  -->
<!-- convert all pngs to svgs  SGV BABYYYY -->
<!-- update package stuff  -->
<!-- add some color and pizzaz  -->
<!-- probbably add slots / componnents for the card section and the instructions and input section to reuse -->

</template>

<script setup>
import { 
  ref,   
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  watch 
} from 'vue';

// app generated random letter   
let randomLetter = $ref('')
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

onBeforeMount(() => {
  getRandomLetter()
});

// user input letter
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
  else {
    console.log('try again')
  }
})

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