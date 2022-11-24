<template>
  <header>
    <Navbar 
    :isTimeAttackOn="isTimeAttackOn"
    :timerValue="timerValue"
    />
  </header>

  <RouterView 
  :isTimeAttackOn="isTimeAttackOn"
  @emitTimeAttack="handleTimeAttackEmit"/>

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
</template>

<script setup>
import { ref, watch } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

const isTimeAttackOn = ref(false)
const timerValue = ref(0)

function handleTimeAttackEmit() {
  isTimeAttackOn.value = true
  // setTimeout(() => {
  //   isTimeAttackOn.value = false
  // }, 30000);
  tMinus3()
}

function tMinus3() {
  let count = 3
  const interval = setInterval(() => {
    count--
  }, 1000);
  setTimeout(() => {
    tMinus30()
    clearInterval(interval)
  }, 3000);
}

function tMinus30() {
  let count = 30
  const myInterval = setInterval(() => {
    console.log(count)
    count--
    timerValue.value++
  }, 1000);
  setTimeout(() => {
    isTimeAttackOn.value = false
    timerValue.value = 0
    clearInterval(myInterval);
    // console.log('incorrect:', incorrectCount.value)
    // console.log('correct:', correctCount.value)
  }, 30000);
}

// watch(isTimeAttackOn, (newBooleanValue, oldBooleanValue) => {
//   if (newBooleanValue === true) {
//     tMinus3()
//   }
// })
</script>