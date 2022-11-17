<template>
  <div class="container">
    <div class="row align-items-center" style="height: 50vh;">
      <div class="col">
        <div class="d-flex flex-wrap">
          <div v-for="letter in inputWordArray" class="card w-25 ratio ratio-1x1">
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
              <h5>Convert letters to fingerspelling</h5>
            </label>
            <div class="input-group mb-3">
              <input v-model="inputWord" type="text" class="form-control" id="userInput" maxlength="16" pattern="[A-Za-z]">
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
  computed
} from 'vue'

// user input 
let inputWord = ref('')

// user input split 
const inputWordArray = computed(() => {
  return inputWord.value.split('')
});

// only allow letters in input 
// center align typewriter display

// bottom the input 
</script>