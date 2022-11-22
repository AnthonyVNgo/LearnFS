<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">LearnFS.io</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
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
</template>

<script setup>
</script>

<style>
</style>