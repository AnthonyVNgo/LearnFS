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
          <button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            FS Diagram
          </button>  
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav v-else style="height: 56px;">
  <div class="progress" style="border-radius: 0px; height: 100%;">
    <div class="progress-bar progress-bar-striped" role="progressbar" style="" aria-valuemax="100" :style="{ width: thirtySecondTimer / 30 * 100 + '%'}"></div>
  </div>
  <div v-if="threeSecondTimer !== 0" class="d-flex justify-content-center">{{threeSecondTimer}}</div>
</nav>
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