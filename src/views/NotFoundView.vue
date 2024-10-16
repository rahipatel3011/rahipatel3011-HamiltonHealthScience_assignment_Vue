<script setup>
import { RouterLink } from "vue-router";

</script>

<template>
    <div class="bg-gray-100 flex items-center justify-center h-screen">
  <div class="bg-white p-8 rounded shadow-md text-center">
    <h1 class="text-6xl font-bold text-blue-600 mb-4">404</h1>
    <p class="text-2xl font-semibold mb-2">This page doesn't exist</p>
    <p class="text-gray-500 mb-4">Oops! The page you are looking for could not be found.</p>
    <RouterLink to="/view1" class="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">Go Home</RouterLink>
  </div>
</div>

</template>