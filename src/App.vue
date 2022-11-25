<template>
  <header>
    <Navbar 
    :isTimeAttackOn="isTimeAttackOn"
    :thirtySecondTimer="thirtySecondTimer"
    :threeSecondTimer="threeSecondTimer"
    />
  </header>

  <RouterView 
  :isTimeAttackOn="isTimeAttackOn"
  :correct="correctCount"
  :attempts="attemptCount"
  @emitTimeAttack="handleTimeAttackEmit"
  @emitCount="calculateAccuracy"
  />

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
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

const isTimeAttackOn = ref(false)

function handleTimeAttackEmit() {
  isTimeAttackOn.value = true
  countFrom3()
}

const correctCount = ref(0)
const attemptCount = ref(0)
function calculateAccuracy(emitValue) {
  correctCount.value = emitValue[0]
  attemptCount.value = emitValue[1]
}

const threeSecondTimer = ref(3)
function countFrom3() {
  const interval = setInterval(() => {
    threeSecondTimer.value--
  }, 1000);
  setTimeout(() => {
    threeSecondTimer.value = 0
    countFrom30()
    clearInterval(interval)
  }, 3000);
}


const thirtySecondTimer = ref(0)
function countFrom30() {
  const myInterval = setInterval(() => {
    thirtySecondTimer.value++
  }, 1000);
  setTimeout(() => {
    isTimeAttackOn.value = false
    thirtySecondTimer.value = 0
    clearInterval(myInterval);
  }, 30000);
}
</script>