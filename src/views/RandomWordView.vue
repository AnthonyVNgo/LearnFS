<template>

  <div class="container">
    <div class="row align-items-center" style="height: 50vh; position: relative;">
      <div class="col">
        <div class="card-toast-container d-flex justify-content-center" style="position: absolute; top: 20px; left: 10px; right: 10px;">
          <!-- refactor with slots / child components  -->
          <div 
          v-if="toastColor === 'danger'"
          class="card bg-danger text-white"
          :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
          style="width: 500px"
          >
            <div class="card-body">
             Incorrect, try again
            </div>
          </div>
          <div 
          v-else-if="toastColor === 'warning'"
          class="card bg-warning"
          :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
          style="width: 500px"
          >
            <div class="card-body">
             Please use letters only
            </div>
          </div>
          <div 
          v-else-if="toastColor === 'success'"
          class="card bg-primary text-white"
          :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
          style="width: 500px"
          >
            <div class="card-body d-flex justify-content-between">
             <span v-if="correctCount === 1">Good job!</span>
             <span v-else>Nice! You're on a {{correctCount}} word streak</span>
            </div>
          </div>
        </div>
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
            <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="width: 100%; object-fit: contain; object-position: center;" class="card-body">
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center">
      <div class="col" style="text-align: center; max-width: 400px;">
        <form @submit.prevent="checkUserInput">
          <label for="userInput" class="form-label">
            <h5>Translate the Fingerspelling word</h5>
          </label>
          <div class="input-group">
            <input 
              v-model="inputWord" 
              type="text" 
              class="form-control" 
              id="userInput" 
              :maxlength="randomWordLength" 
              minlength="4" required placeholder="Type here" 
              autocomplete="off"
              >
            <button type="button" class="btn btn-dark" @click="handleButtonClick(false)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
              </svg>
            </button>
            <button type="button" class="btn btn-dark" @click="handleButtonClick(true)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
            </button>
            <button type="button" class="btn btn-dark" @click="getRandomWord">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script setup>
import { 
  ref, 
  computed,
  onBeforeMount,
} from 'vue'

// Loading 
const loading = ref(null)

// Random Word Length 
const randomWordLength = ref(4)
 
function handleButtonClick(boolean) {
  if (boolean === true && randomWordLength.value <= 11) {
    randomWordLength.value++
    getRandomWord()
  } 
  else if(boolean === false && randomWordLength.value !== 4) {
    randomWordLength.value--
    getRandomWord()
  }
}

// Random Word 
const randomWord = ref('')

function getRandomWord() {
  loading.value = true
  fetch(`https://random-word-api.herokuapp.com/word?length=${randomWordLength.value}`)
  .then(res => res.json())
  .then(data => {
    randomWord.value = data[0];
    console.log('randomWord:', randomWord.value);
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
let inputWord = ref('')

function checkUserInput() {
  if (/^[a-zA-Z]+$/.test(inputWord.value) === false) {
    toastColor.value = 'warning'
    isOpacity1.value = true
  } else if (inputWord.value !== randomWord.value) {
    toastColor.value = 'danger'
    isOpacity1.value = true
    correctCount.value = 0
  } 
  else {
    toastColor.value = 'success'
    isOpacity1.value = true
    inputWord.value = ''
    correctCount.value++
    getRandomWord()
  }
  setTimeout(() => {
    isOpacity1.value = false
  }, 250);
}

const isOpacity1 = ref(false)
const toastColor = ref('')

const correctCount = ref(0)
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
