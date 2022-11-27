<template>
<nav v-if="!isTimeAttackOn" class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <RouterLink class="navbar-brand d-lg-none" to="/">LearnFS.io</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <RouterLink class="navbar-brand d-none d-lg-block" to="/">LearnFS.io</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/random-word">Random Word</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link" to="/fs-typewriter">TypeWriter</RouterLink>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#diagramModal">
            FS Diagram
          </button>  
        </li>
      </ul>
    </div>
  </div>
</nav>

<nav v-else style="height: 56px;">
  <div class="progress" style="border-radius: 0px; height: 100%;">
    <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuemax="100" :style="{ width: thirtySecondTimer / 30 * 100 + '%'}"></div>
  </div>
  <div v-if="threeSecondTimer !== 0" class="d-flex justify-content-center">
    <h2 class="mt-3">
      {{threeSecondTimer}}
    </h2>
  </div>
</nav>

<div class="modal fade" id="diagramModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Fingerspelling Diagram</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <!-- <img src="https://i.imgur.com/zqqSG9H.png" class="w-100"> -->
          <!-- <img src="../../public/svg/fsdiagram.png" class="w-100"> -->
          <img :src="'./svg/fsdiagram.png'" class="w-100">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isTimeAttackOn: {
    type: Boolean,
  },
  thirtySecondTimer: {
    type: Number,
  },
  threeSecondTimer: {
    type: Number,
  }
})
</script>