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
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info" viewBox="0 0 16 16">
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
            </svg> -->
            FS Diagram
          </button>  
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
// add a home screen
// remove nav bar if on home screen view 
// add levels selection on home screen
// connect routes to each level selection similar to fingerspleling.io 

</script>

<style>
</style>