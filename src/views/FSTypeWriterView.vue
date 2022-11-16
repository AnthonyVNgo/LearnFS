<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex flex-wrap">
          <!-- <div v-for="letter in inputWordArray" class="card ratio ratio-1x1 mx-1"> -->
          <div v-for="letter in inputWordArray" class="card w-25">
          <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 75px">{{letter}}</span>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <form @submit.prevent="checkUserInput">
          <div class="mb-3">
            <label for="userInput" class="form-label">
              <h5>Convert letters fingerspelling</h5>
            </label>
            
            <div class="input-group mb-3">
              <input v-model="inputWord" type="text" class="form-control" id="userInput" maxlength="16">
            </div>
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

// user input 
let inputWord = ref('')

// user input split 
const inputWordArray = computed(() => {
  return inputWord.value.split('')
});

// function splitter() {
//   console.log('randomWord:', randomWord.value)
//   console.log('randomWordArray:', randomWordArray.value)
//   console.log('inputWord:', inputWord.value)
// }

</script>