<template>
  <div class="card-toast-container d-flex justify-content-center" style="position: absolute; top: 20px; left: 10px; right: 10px; z-index: 5;">
    <div 
    v-if="toastColor === 'danger'"
    class="card bg-danger text-white"
    :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
    style="width: 500px"
    >
      <div class="card-body">
        <span class="me-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
        </svg>
        </span>
        <span>
          Incorrect, try again
        </span>
      </div>
    </div>
    <div 
    v-else-if="toastColor === 'warning'"
    class="card bg-warning"
    :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
    style="width: 500px"
    >
      <div class="card-body">
        <span class="me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
          </svg>
        </span>
        <span>
          Invalid characters, use letters only
        </span>
      </div>
    </div>
    <div 
    v-else-if="toastColor === 'success'"
    class="card bg-primary text-white"
    :class="{'opacity-1' : isOpacity1, 'opacity-1 opacity-0' : !isOpacity1}"
    style="width: 500px"
    >
      <div class="card-body d-flex">
        <span class="me-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
          </svg>
        </span>
        <span v-if="correctCount === 1">Good job!</span>
        <span v-else>Nice! You're on a {{correctCount}} word streak</span>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { ref } from 'vue'
// const isOpacity1 = ref(false)
// const toastColor = ref('')

const props = defineProps({
  toastColor: {
    type: String,
  },
  isOpacity1: {
    type: Boolean,
  }
})

// const props = defineProps({
//   toastColor: String,
//   isOpacity1: Boolean,
//   correctCount: Number
// })
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