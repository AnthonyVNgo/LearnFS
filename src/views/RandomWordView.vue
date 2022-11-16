<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="d-flex">
          <div v-for="letter in randomWordArray" class="card ratio ratio-1x1 mx-1">
          <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
            <span style="font-size: 75px">{{letter}}</span>
          </div>
        </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <form>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              <h5>Spell out the fingerspelling word below</h5>
            </label>
            <!-- add two way binding here  -->
            <input type="text" class="form-control" id="exampleInputPassword1" >
          </div>
          <!-- add function to check input -->
          <!-- if input is a match, then positive feedback & generate new word  -->
          <!-- if input is not a match, then negative feedback toast: try again  -->
          <!-- <button  class="btn btn-primary">Submit</button> -->

        </form>




        <button type="button" class="btn btn-dark" @click="getRandomWord">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>

        <!-- <button @click="splitter">splitter</button> -->
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

// random word 
const randomWord = ref('')

function getRandomWord() {
  fetch('https://random-word-api.herokuapp.com/word?length=4')
  .then(res => res.json())
  .then(data => {
    randomWord.value = data[0]
  })
  .catch(err => console.log(err))
}

onBeforeMount(() => {
  getRandomWord()
});

// random word split 
const randomWordArray = computed(() => {
  return randomWord.value.split('')
});

function splitter() {
  console.log(randomWord.value)
  console.log(randomWordArray.value)
}

// add mounted life cycle somewhere so the word is prefetched 


// user can enter letter values 
// user can submit answer 
// user can race against the clock 
// user can get new word
// user will be notified of correct answer 
// split the word up
// loop over it to create each card 
// add input validation like in RLview 
// move on to typewriter 
// touch up UI on mobile 
// desktop UI 

</script>

<style scoped>
</style>