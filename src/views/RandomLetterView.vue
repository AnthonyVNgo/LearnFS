<template>
<div class="container" @keydown="handleKeyDown">
  <div class="row my-5">
    <div class="col">
      <div class="card ratio ratio-1x1">
        <div class="card-body" style="display: flex; justify-content: center; align-items: center;">
          <span style="font-size: 100px">{{randomLetter}}</span>
        </div>
      </div>

      <!-- Instructions  -->
      <div class="row my-5">
        <div class="col">
          <h5>Match the fingerspelling card with the correct letter below</h5>
        </div>
      </div>

      <div class="row justify-content-center my-5">
        <div class="col">
          <div class="row justify-content-center mb-3">
            <div class="col-auto">
              <input type="text" class="form-control form-control-lg" id="" v-model="inputLetter" maxlength="1">
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-auto">
              <!-- Get Random Letter Button  -->
              <button type="button" class="btn btn-dark" @click="getRandomLetter">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                </svg>
              </button>
            </div>
            <div class="col-auto">
              <!-- Info Modal Trigger Button -->
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
                  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
              </button>  
            </div>
          </div>
        </div>
      </div>

      <!-- Toast  -->
      <div class="toast-container position-fixed bottom-0 p-3">
        <div class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="d-flex">
            <div class="toast-body">
              Good job
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Fingerspelling Diagram</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <img src="https://i.imgur.com/zqqSG9H.png" alt="" style="width: 100%;">
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
  
</template>

<script setup>
import { ref,   
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  watch } from 'vue';

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
    handleToastTrigger()
    inputLetter.value = ''
    // need to somehow clear the input value
  }
})

// toast 
function handleToastTrigger() {
  var toastElList = [].slice.call(document.querySelectorAll('.toast'))
  var toastList = toastElList.map(function(toastEl) {
    return new bootstrap.Toast(toastEl)
  })
  toastList.forEach(toast => toast.show())
}

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