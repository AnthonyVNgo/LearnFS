<template>

  <ViewContainer>

    <template v-slot:toast>
      <Toast 
      :toastColor="toastColor"
      :isOpacity1="isOpacity1"
      :correctCount="correctCount"
      />
    </template>

    <template v-slot:cards>
      <div class="d-flex justify-content-center">
        <div class="card ratio ratio-1x1" style="max-width: 160px;">
          <img :src="`../../public/images/${randomLetter}.png`" :alt="randomLetter"  style="object-fit: contain;" class="card-body">
        </div>
      </div>
    </template>

    <template v-slot:input>
      <form @submit.prevent="checkInput">
        <label for="randomLetter" class="form-label">
          <h5>Enter the correct Fingerspelling letter</h5>
        </label>
        <div class="input-group mb-3">
          <input type="text" class="form-control form-control" id="randomLetter" v-model="userInput" maxlength="1" placeholder="Type here" autocomplete="off">
          <button type="button" class="btn btn-dark" @click="getRandomLetter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
      </form>
    </template>
      
  </ViewContainer>

<!-- <div class="container">
  <div class="row align-items-center" style="height: 50vh; position: relative;">
    <div class="col">
     
      <Toast 
      :toastColor="toastColor"
      :isOpacity1="isOpacity1"
      :correctCount="correctCount"
      />

      <div class="d-flex justify-content-center">
        <div class="card ratio ratio-1x1" style="max-width: 160px;">
          <img :src="`../../public/images/${randomLetter}.png`" :alt="randomLetter"  style="object-fit: contain;" class="card-body">
        </div>
      </div>

    </div>
  </div>

  <div class="row justify-content-center">
    <div class="col" style="text-align: center; max-width: 400px;">
      <form @submit.prevent="checkInput">
        <label for="randomLetter" class="form-label">
          <h5>Enter the correct Fingerspelling letter</h5>
        </label>
        <div class="input-group mb-3">
          <input type="text" class="form-control form-control" id="randomLetter" v-model="userInput" maxlength="1" placeholder="Type here" autocomplete="off">
          <button type="button" class="btn btn-dark" @click="getRandomLetter">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</div> -->
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import Toast from '../components/Toast.vue'
import ViewContainer from '../components/ViewContainer.vue'

// Random Letter   
let randomLetter = $ref('')
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

onBeforeMount(() => {
  getRandomLetter()
});

// User Input Letter
let userInput = ref('')
const isOpacity1 = ref(false)
const toastColor = ref('')
const correctCount = ref(0)

function checkInput() {
  if (/^[a-zA-Z]+$/.test(userInput.value) === false) {
    toastColor.value = 'warning'
    isOpacity1.value = true
  } else if (userInput.value !== randomLetter) {
    toastColor.value = 'danger'
    isOpacity1.value = true
    correctCount.value = 0
  } else {
    toastColor.value = 'success'
    isOpacity1.value = true
    userInput.value = ''
    correctCount.value++
    getRandomLetter()
  }
  setTimeout(() => {
    isOpacity1.value = false
  }, 250);
}

// import { 
//   ref,   
//   onBeforeMount,
//   onMounted,
//   onBeforeUpdate,
//   onUpdated,
//   onBeforeUnmount,
//   onUnmounted,
//   onActivated,
//   onDeactivated,
//   onErrorCaptured,
//   watch 
// } from 'vue';

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