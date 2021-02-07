<template>
  <div class="dropdonw-nav">
    <ul class="nav-list">
      <li class="active">All</li>
      <li>Todo</li>
      <li>Done</li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.dropdonw-nav {
  height: 256px;
  width: 192px;
  background-color: #fff;
  position: absolute;
  left: 8px;
  top: 8px;
  z-index: 10;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  display: none;
}

.dropdonw-nav.active {
  display: block;
}

.nav-list {
  display: flex;
  list-style: none;
  justify-content: space-between;
  flex-direction: column;
  padding: 0;
}

.nav-list li {
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  color: rgba(106, 117, 155, 0.3);
  padding: 16px;
}

.nav-list li.active {
  color: #21273d;
}
</style>
