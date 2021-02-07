<template>
  <div class="todo-input">
    <input type="text" placeholder="Type todo here..." />
    <button class="add-button">
      <i class="fas fa-plus"></i>
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.todo-input {
  height: 48px;
  position: relative;
  display: none;
}

input {
  height: 100%;
  width: 100%;
  padding-left: 16px;
  padding-right: 48px;
  font-size: 16px;
  font-weight: 400;
  color: #21273d;
  border-color: transparent;
}

input::placeholder {
  color: #b9d4f1;
}

.add-button {
  border-color: transparent;
  background-color: transparent;
  color: #6a759b;
  font-size: 20px;
  position: absolute;
  right: 8px;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (min-width: 768px) {
  .todo-input {
    display: block;
  }
}
</style>
