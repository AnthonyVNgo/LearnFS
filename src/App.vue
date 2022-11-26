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

  <div class="modal fade" id="footerModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">About LearnFS.xyz </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>
            Hey there,
            <br>
            <br>
            Anthony here, and I'm the creator of this little project. My goal for this, and for pursuing this career path is to utilize technology to help others or produce some net positive in the world. 
            <br>
            <br>
            I hope that you learned something or found this page useful, and if you did, please share it with your friends!
            <br>
            <br>
            If you want to collaborate on a cool project, have open positions, or just want to say hello, feel free to drop me a message
          </p>
          <a href="https://www.linkedin.com/in/anthonyvngo/" target="_blank">
            <button class="btn btn-dark">
              Connect on LinkedIn
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>

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