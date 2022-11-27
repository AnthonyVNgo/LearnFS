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

  <AboutModal />

  <footer>
    <button type="button" style="position:absolute; bottom: 5px; right: 5px; border: none; background-color: transparent;" data-bs-toggle="modal" data-bs-target="#footerModal">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    </button>
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import AboutModal from './components/AboutModal.vue'

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
    countFrom30()
    clearInterval(interval)
  }, 3000);
}

function resetThreeSecondTimer() {
  threeSecondTimer.value = 3
}

function resetThirtSecondTimer() {
  thirtySecondTimer.value = 0
}

const thirtySecondTimer = ref(0)
function countFrom30() {
  const myInterval = setInterval(() => {
    thirtySecondTimer.value++
  }, 1000);
  setTimeout(() => {
    isTimeAttackOn.value = false
    resetThirtSecondTimer()
    resetThreeSecondTimer()
    clearInterval(myInterval);
  }, 30000);
}
</script>