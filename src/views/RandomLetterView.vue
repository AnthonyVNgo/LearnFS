<template>

<div class="container" @keydown="handleKeyDown">
  <div class="row align-items-center" style="height: 50vh;">
    <div class="col">
      <div class="d-flex justify-content-center">
        <div class="card ratio ratio-1x1 w-50">
          <img :src="`../../public/images/${randomLetter}.png`" alt="" srcset="" style="object-fit: contain;" class="card-body">
        </div>
      </div>
    </div>
  </div>

  <!-- Instructions  -->
  <div class="row justify-content-center">
    <div class="col" style="text-align: center">
      <label for="userInput" class="form-label">
        <h5>Enter the Fingerspelling letter below</h5>
      </label>
      <div class="input-group mb-3">
        <input type="text" class="form-control form-control" id="randomLetter" v-model="inputLetter" maxlength="1">
        <button type="button" class="btn btn-dark" @click="getRandomLetter">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- will likely remove toast because you can't see on mobile  -->
  <!-- Toast  -->
  <!-- <div class="toast-container d-flex justify-content-center position-fixed top-0 start-0 end-0 p-3 w-100">
    <div class="toast align-items-center text-bg-dark text-white border-0 m-0" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="d-flex">
        <div class="toast-body">
          Good job
        </div>
      </div>
    </div>
  </div> -->

</div>
<!-- add streak counter  -->
<!-- convert all pngs to svgs  SGV BABYYYY -->
<!-- update package stuff  -->
<!-- code cleanup stuff  -->
<!-- add some color and pizzaz  -->

</template>

<script setup>
import { 
  ref,   
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  watch 
} from 'vue';

// app generated random letter   
let randomLetter = $ref('')
function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]
}

onBeforeMount(() => {
  getRandomLetter()
});

// user input letter
let inputLetter = ref('')
function handleKeyDown(event) {
  if (event.which >= 65 && event.which <= 90) {
    inputLetter.value = event.key
  }
}

watch(inputLetter, (newValue, oldValue) => {
  if (newValue === randomLetter) {
    getRandomLetter()
    // handleToastTrigger()
    inputLetter.value = ''
  }
  else {
    console.log('try again')
  }
})

// toast 
// function handleToastTrigger() {
//   var toastElList = [].slice.call(document.querySelectorAll('.toast'))
//   var toastList = toastElList.map(function(toastEl) {
//     return new bootstrap.Toast(toastEl)
//   })
//   toastList.forEach(toast => toast.show())
// }

// beforeDestroy() {
// 	window.removeEventListener('keypress', this._keyListener);
// },

  // onBeforeMount(() => {
  //   console.log("Before Mount!");
  // });
  // onMounted(() => {
  //   console.log("Mounted!");
  // });
  // onBeforeUpdate(() => {
  //   console.log("Before Update!");
  // });
  // onUpdated(() => {
  //   console.log("Updated!");
  // });
  // onBeforeUnmount(() => {
  //   console.log("Before Unmount!");
  // });
  // onUnmounted(() => {
  //   console.log("Unmounted!");
  // });
  // onActivated(() => {
  //   console.log("Activated!");
  // });
  // onDeactivated(() => {
  //   console.log("Deactivated!");
  // });
  // onErrorCaptured(() => {
  //   console.log("Error Captured!");
  // });
</script>

<style scoped>
</style>