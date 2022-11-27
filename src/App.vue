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
    <FooterComponent />    
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import FooterComponent from './components/Footer.vue'
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