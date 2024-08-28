<script setup lang="ts">
import HomeView from './views/HomeView.vue';
</script>

<template>
  <div class="router">
    <HomeView />
  </div>
</template>
<style lang="scss">
.router {
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  overflow-y: overlay;
  overflow-x: hidden;
}
</style>
