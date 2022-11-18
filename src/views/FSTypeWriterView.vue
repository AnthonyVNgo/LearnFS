<template>
  <div class="container">
    <div class="row align-items-center" style="height: 50vh;">
      <div class="col">
        <div class="d-flex flex-wrap">
          <!-- add v-if here for if there isn't any user input  -->
          <!-- add else for when there is user input  -->
          <div v-for="letter in inputWordArray" class="card w-25 ratio ratio-1x1">
            <img :src="`../../public/images/${letter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <form @submit.prevent="checkUserInput">
          <div class="mb-3" style="position: absolute; bottom: 0; left: 0; right: 0;">
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
</script>