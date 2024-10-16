<script setup>
import { inject, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import FormCard from '../components/FormCard.vue'

const formState = inject('formState')
const { firstName, lastName, dob, hcn, gender } = toRefs(formState)
</script>

<template>
  <FormCard>
    <h1 class="text-4xl font-bold mb-8 text-center text-gray-800">
      Personal Information
    </h1>
    <div class="space-y-6">
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <label class="block text-gray-700 font-medium">First Name:</label>
        <p class="text-lg font-semibold text-gray-900">{{ firstName }}</p>
      </div>
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <label class="block text-gray-700 font-medium">Last Name:</label>
        <p class="text-lg font-semibold text-gray-900">{{ lastName }}</p>
      </div>
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <label class="block text-gray-700 font-medium">Date of Birth:</label>
        <p class="text-lg font-semibold text-gray-900">{{ dob }}</p>
      </div>
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <label class="block text-gray-700 font-medium"
          >Health Card Number:</label
        >
        <p class="text-lg font-semibold text-gray-900">{{ hcn }}</p>
      </div>
      <div class="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
        <label class="block text-gray-700 font-medium">Gender:</label>
        <p class="text-lg font-semibold text-gray-900">{{ gender }}</p>
      </div>
    </div>
    <div class="text-center mt-8">
      <RouterLink
        to="/personal-info"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-700"
      >
        Edit Information
      </RouterLink>
    </div>
  </FormCard>
</template>
