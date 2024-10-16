<script>
// import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex items-center justify-center h-screen">
    <RouterLink
      to="/personal-info"
      class="bg-blue-500 text-white text-4xl font-bold py-6 px-12 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:scale-105 animate-pulse"
    >
      Start
    </RouterLink>
  </div>
</template>

<style scoped>
.ripple-button {
  position: relative;
  overflow: hidden;
}

.ripple-button::before {
  content: '';
  position: absolute;
  width: 300%;
  height: 300%;
  top: 50%;
  left: 50%;
  background: rgba(0, 144, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0);
  animation: ripple 2s infinite ease-out;
}

@keyframes ripple {
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
}
</style>
