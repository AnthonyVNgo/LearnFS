<template>
  <ViewContainer>

    <template v-slot:toast>
      <Toast 
      :toastColor="toastColor"
      :isOpacity1="isOpacity1"
      />
    </template>

    <template v-slot:cards>
      <div class="d-flex flex-wrap justify-content-center">
        <h1 v-if="!inputWordArray.length">Type + Enter below</h1>
        <div v-else v-for="letter in inputWordArray" class="card ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
          <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
        </div>
      </div>
    </template>

    <template v-slot:input>
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
          <button type="button" class="btn btn-dark" @click="clearInput">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
      </form>
    </template>

  </ViewContainer>
</template>

<script setup>
import { ref } from 'vue'
import Toast from '../components/Toast.vue'
import ViewContainer from '../components/ViewContainer.vue'

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

function clearInput() {
  userInput.value = ''
  generateInputWordArray()
}
</script>