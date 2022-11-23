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
      <div v-if="loading === true" class="d-flex flex-wrap justify-content-center">
        <div v-for="letter in randomWordArray" class="ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
          <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
            <div class="spinner-grow" role="status">
            </div>
          </div>
        </div>
      </div>

      <div v-else class="d-flex flex-wrap justify-content-center">
        <div v-for="letter in randomWordArray" class="card ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
          <img :src="`../../public/svg/${letter}.svg`" alt="" srcset="" style="width: 100%; object-fit: contain; object-position: center;" class="card-body">
        </div>
      </div>
    </template>

    <template v-slot:input>
      <form @submit.prevent="checkUserInput">
        <label for="userInput" class="form-label">
          <h5>Translate the Fingerspelling word</h5>
        </label>
        <div class="input-group">
          <input 
            v-model="userInput" 
            type="text" 
            class="form-control" 
            id="userInput" 
            :maxlength="randomWordLength" 
            minlength="4" required placeholder="Type here" 
            autocomplete="off"
            >
          <button type="button" class="btn btn-dark" @click="handleLengthButtonClick(false)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
          <button type="button" class="btn btn-dark" @click="handleLengthButtonClick(true)">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
          <button type="button" class="btn btn-dark" @click="handleResetButtonClick">
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
import { ref, computed, onBeforeMount } from 'vue'
import Toast from '../components/Toast.vue'
import ViewContainer from '../components/ViewContainer.vue'

// Loading 
const loading = ref(null)

// Random Word Length 
const randomWordLength = ref(4)
 
function handleLengthButtonClick(boolean) {
  if (boolean === true && randomWordLength.value <= 11) {
    randomWordLength.value++
    getRandomWord()
  } 
  else if(boolean === false && randomWordLength.value !== 4) {
    randomWordLength.value--
    getRandomWord()
  }
}

function handleResetButtonClick() {
  userInput.value = ''
  getRandomWord()
}

// Random Word 
const randomWord = ref('')

function getRandomWord() {
  loading.value = true
  fetch(`https://random-word-api.herokuapp.com/word?length=${randomWordLength.value}`)
  .then(res => res.json())
  .then(data => {
    randomWord.value = data[0];
    loading.value = false
  })
  .catch(err => console.log('error:', err))
}

onBeforeMount(() => {
  getRandomWord()
});

// Random Word Split 
const randomWordArray = computed(() => {
  return randomWord.value.split('')
});

// User Input 
const userInput = ref('')
const isOpacity1 = ref(false)
const toastColor = ref('')
const correctCount = ref(0)

function checkUserInput() {
  if (/^[a-zA-Z]+$/.test(userInput.value) === false) {
    toastColor.value = 'warning'
    isOpacity1.value = true
  } else if (userInput.value !== randomWord.value) {
    toastColor.value = 'danger'
    isOpacity1.value = true
    correctCount.value = 0
  } 
  else {
    toastColor.value = 'success'
    isOpacity1.value = true
    userInput.value = ''
    correctCount.value++
    getRandomWord()
  }
  setTimeout(() => {
    isOpacity1.value = false
  }, 250);
}
</script>
