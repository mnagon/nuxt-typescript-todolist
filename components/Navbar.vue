<template>
  <nav>
    <span class="logo"> Todo list</span>
    <button class="hamberger-button">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style scoped>
nav {
  position: relative;
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-weight: 700;
  font-size: 20px;
  color: #21273d;
}

.hamberger-button {
  border-color: transparent;
  background-color: transparent;
  font-size: 20px;
  color: #21273d;
  cursor: pointer;
}
</style>
