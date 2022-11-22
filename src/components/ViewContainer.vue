<template>
  <div class="container">

    <div class="row align-items-center" style="height: 50vh; position: relative;">
      <div class="col">
        <slot name="toast"></slot>
        <slot name="cards"></slot>
      </div>
    </div>
    
    <div class="row justify-content-center">
      <div class="col" style="text-align: center; max-width: 400px;">
      
        <slot name="input"></slot>
        
      </div>
    </div>

  </div>
</template>