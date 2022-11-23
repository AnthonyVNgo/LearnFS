<template>
  <header>
    <Navbar 
    :isTimeAttackOn="isTimeAttackOn"
    />
  </header>

  <RouterView @startTimeAttack="listenForEmit"/>

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

function listenForEmit() {
  console.log('bang')
  isTimeAttackOn.value = true
}
</script>