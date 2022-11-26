<template>
  <ViewContainer v-if="!isResultsModalOpen">

    <template v-slot:toast>
      <Toast 
      :toastColor="toastColor"
      :isOpacity1="isOpacity1"
      :correctCount="correctCount"
      :isTimeAttackOn="isTimeAttackOn"
      on-word-view=true
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
      <form @submit.prevent="handleFormSubmission">
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
          <button type="button" class="btn btn-dark" @click="handleLengthButtonClick(false)" :disabled="isTimeAttackOn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>
          </button>
          <button type="button" class="btn btn-dark" @click="handleLengthButtonClick(true)" :disabled="isTimeAttackOn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
          </button>
          <button type="button" class="btn btn-dark" @click="handleResetButtonClick" :disabled="isTimeAttackOn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>
          </button>
        </div>
      </form>
      <button class="btn btn-dark mt-3" @click="handleTimeAttackBtn" :disabled="isTimeAttackOn">
        Time Attack
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-history" viewBox="0 0 16 16">
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"/>
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"/>
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </button>
    </template>
  
  </ViewContainer>
  <div v-else class="container">
    <div class="row align-items-center justify-content-center" style="height: 50vh; position: relative;">
      <div class="col-auto card p-5">
        <h3 class="mb-3">Time attack results</h3>
        <h4>Correct: {{correct}}</h4>
        <h4 class="my-3">Attempts: {{attempts}}</h4>
        <h4>Accuracy: {{fieldGoalPercentage}}</h4>
        <button class="btn btn-dark mt-3" @click="handleBackButtonClick">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
          Back 
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onBeforeMount, watch } from 'vue'
import Toast from '../components/Toast.vue'
import ViewContainer from '../components/ViewContainer.vue'

// Loading 
const loading = ref(null)

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

// Change Word Length 
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

// Reset Word Value & User Input
function handleResetButtonClick() {
  clearUserInput()
  getRandomWord()
}

// User Input 
const userInput = ref('')

const correctCount = ref(0)
const totalCount = ref(0)

const isOpacity1 = ref(false)
const toastColor = ref('')

function clearUserInput() {
  userInput.value = ''
}

function clearCorrectCounter() {
  correctCount.value = 0
}

function clearBothCounters() {
  correctCount.value = 0
  totalCount.value = 0
}  

function checkUserInput() {
  if (/^[a-zA-Z]+$/.test(userInput.value) === false) {
  toastColor.value = 'warning'
  isOpacity1.value = true
  } else if (!props.isTimeAttackOn && userInput.value !== randomWord.value) {
    toastColor.value = 'danger'
    isOpacity1.value = true
    clearCorrectCounter()
  } else if (props.isTimeAttackOn && userInput.value !== randomWord.value) {
    toastColor.value = 'danger'
    isOpacity1.value = true
    totalCount.value++  
  } else {
    toastColor.value = 'success'
    isOpacity1.value = true
    userInput.value = ''
    totalCount.value++  
    correctCount.value++
    getRandomWord()
  }
  setTimeout(() => {
    isOpacity1.value = false
  }, 250);
}

function handleFormSubmission() {
  checkUserInput()
}

const emit = defineEmits(['emitTimeAttack','emitCount'])

function emitCountToParent() {
  emit('emitCount', [correctCount.value, totalCount.value])
}

function handleTimeAttackBtn() {
  emit('emitTimeAttack')
  setTimeout(() => {
    clearCorrectCounter()
    getRandomWord()
  }, 3000);
}

function openResultsModal() {
  isResultsModalOpen.value = true
}

watch(() => props.isTimeAttackOn, (newBoolean, oldBoolean) => {
  if (newBoolean === false) {
    emitCountToParent()
    clearUserInput()
    clearBothCounters()
    openResultsModal()
  }
})

const fieldGoalPercentage = computed(() => {
  if (props.correct === 0 && props.attempts === 0) {
    return '0%'
  } else {
    return props.correct / props.attempts * 100 + '%'
  }
})

const isResultsModalOpen = ref(false)

function handleBackButtonClick() {
  isResultsModalOpen.value = false
}

const props = defineProps({
  isTimeAttackOn: {
    type: Boolean,
  },
  correct: {
    type: Number,
  },
  attempts: {
    type: Number,
  }
})
</script>
