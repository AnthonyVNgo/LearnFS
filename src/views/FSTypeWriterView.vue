<template>
  <div class="container">
    <div class="row align-items-center" style="height: 50vh;">
      <div class="col">
        <div class="d-flex flex-wrap justify-content-center">
          <h1 v-if="inputWord === ''">Type something below</h1>
          <div v-else v-for="letter in inputWordArray" class="card w-25 ratio ratio-1x1">
            <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
          </div>
        </div>
      </div>
    </div>

    <!-- Instructions  -->
    <div class="row">
      <div class="col" style="text-align: center">
        <form @submit.prevent="checkUserInput">
          <label for="userInput" class="form-label">
            <h5>Convert letters to fingerspelling</h5>
          </label>
          <div class="input-group mb-3">
            <input v-model="inputWord" type="text" class="form-control" id="userInput" maxlength="16" pattern="[A-Za-z]">
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
</script>