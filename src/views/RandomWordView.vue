<template>

  <div class="container">
    <div class="row align-items-center" style="height: 50vh;">
      <div class="col">
        <div v-if="loading === true" class="d-flex flex-wrap justify-content-center">
          <div v-for="letter in randomWordArray" class="ratio ratio-1x1" style="min-width: 80px; max-width: 10%;">
            <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
              <div class="spinner-grow" role="status">
              </div>
            </div>
          </div>
        </div>
        <div v-else class="d-flex flex-wrap justify-content-center">
          <div v-for="letter in randomWordArray" class="card ratio ratio-1x1 mx-1" style="min-width: 80px; max-width: 10%;">
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
          <div class="input-group mb-3">
            <input v-model="inputWord" type="text" class="form-control" id="userInput" :maxlength="wordLength" minlength="4" required placeholder="Type here" pattern="[a-zA-Z]+" oninvalid="setCustomValidity('Please submit letters only')">
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
        <button @click="resetBoolean" :class="{'animated' : boolean }">pulser</button>
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

const loading = ref(null)

const randomWord = ref('')

function getRandomWord() {
  loading.value = true
  fetch(`https://random-word-api.herokuapp.com/word?length=${wordLength.value}`)
  .then(res => res.json())
  .then(data => {
    randomWord.value = data[0]
    loading.value = false
  })
  .catch(err => console.log('error:', err))
}

onBeforeMount(() => {
  getRandomWord()
});

// random word split 
const randomWordArray = computed(() => {
  return randomWord.value.split('')
});

// user input 
let inputWord = ref('')

function checkUserInput() {
  console.log(inputWord.value)
  if (inputWord.value !== randomWord.value) {
    console.log('inccorect')
  } 
  else {
    getRandomWord()
    inputWord.value = ''
  }
}

const wordLength = ref(4)
 
function handleButtonClick(boolean) {
  if (boolean === true && wordLength.value <= 11) {
    wordLength.value++
    getRandomWord()
  } 
  else if(boolean === false && wordLength.value !== 4) {
    wordLength.value--
    getRandomWord()
  }
}


const boolean = ref(false)
function resetBoolean() {
  boolean.value = true
  setTimeout(() => {
    boolean.value = false
  }, 350);
}
// bonus feature: 
// user can race against the clock 
// add streak counter 
</script>

<style scoped>

.animated {
  animation: pulse 0.3s;
}

@keyframes pulse {
    0% {
        box-shadow: 0px 0px 0px 0px ;
    }
    100% {
       box-shadow: 0px 0px 5px 25px rgba(35, 130, 220,0);
    }
}
</style>
