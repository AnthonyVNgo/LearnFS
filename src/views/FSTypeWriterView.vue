<template>
  <div class="container">
    <div class="row align-items-center" style="height: 50vh; position: relative;">
      <div class="col">

        <Toast 
        :toastColor="toastColor"
        :isOpacity1="isOpacity1"
        />
        <!-- <div class="card-toast-container d-flex justify-content-center" style="position: absolute; top: 10px; left: 10px; right: 10px;">
          <div 
          v-if="toastColor === 'warning'"
          class="card bg-warning"
          :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
          style="width: 500px"
          >
            <div class="card-body">
              Please use letters only. Space, numbers, and special characters aren't allowed
            </div>
          </div>
        </div> -->

        <div class="d-flex flex-wrap justify-content-center">
          <h1 v-if="!inputWordArray.length">Type + Enter below</h1>
          <div v-else v-for="letter in inputWordArray" class="card ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
            <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col" style="text-align: center; max-width: 400px;">
        <form @submit.prevent="checkInput">
          <label for="userInput" class="form-label">
            <h5>Convert letters to Fingerspelling</h5>
          </label>
          <div class="input-group mb-3">
            <input 
            v-model="userInput" 
            type="text" 
            class="form-control" 
            id="userInput" 
            maxlength="16" 
            placeholder="Type here + Enter" 
            autocomplete="off">
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import Toast from '../components/Toast.vue'

const userInput = ref('')
const inputWordArray = ref('')
const isOpacity1 = ref(false)
const toastColor = ref('')

function checkInput() {
  if (/^[a-zA-Z]+$/.test(userInput.value) === false) {
    toastColor.value = 'warning'
    isOpacity1.value = true
  } else {
    generateInputWordArray()
  }
  setTimeout(() => {
    isOpacity1.value = false
  }, 250);
}

function generateInputWordArray() {
  const inputWordSplit = userInput.value.split('')
  inputWordArray.value = inputWordSplit
}
</script>

<style scoped>
.opacity-1 {
  opacity: 1;
}
.opacity-0 {
  opacity: 0;
  transition: opacity 2.5s ease-out;
}
</style>