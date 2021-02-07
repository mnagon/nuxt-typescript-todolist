<template>
  <div class="modal" :class="{ active }">
    <div class="modal-card">
      <h3>Add todo</h3>
      <input type="text" />
      <div class="button-group">
        <button>Cancel</button>
        <button>
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface State {
  active: boolean
}
export default Vue.extend({
  data(): State {
    return {
      active: false,
    }
  },
})
</script>

<style scoped>
h3 {
  font-size: 20px;
  display: block;
  margin-top: 0;
  margin-bottom: 24px;
  color: #21273d;
}

.modal {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-color: rgba(185, 212, 241, 0.3);
  z-index: 10;
  padding: 32px 16px;
  display: none;
}

.modal.active {
  display: block;
}

input {
  font-size: 16px;
  color: #21273d;
  border-color: transparent;
  background-color: transparent;
  border-bottom: solid 1px #b9d4f1;
  line-height: 1.5rem;
  width: 100%;
}

.modal-card {
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.button-group {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
button {
  cursor: pointer;
  font-size: 20px;
  border-color: transparent;
  background-color: transparent;
  color: #6a759b;
  font-size: 20px;
}
</style>
