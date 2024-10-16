<script setup>
import { inject, toRefs } from 'vue'
import FormInput from '../components/FormInput.vue'
import FormCard from '../components/FormCard.vue'
import { useRouter } from 'vue-router'

// Inject the formState from the composable
const formState = inject('formState')

// Use toRefs to make formState properties reactive and usable in the form
const { firstName, lastName, firstNameError, lastNameError } = toRefs(formState)

const router = useRouter()

// Handle form submission
const submitForm = () => {
  // Redirect on successful validation
  firstName.value.trim().length === 0
    ? (firstNameError.value = 'first name required')
    : (firstNameError.value = '')
  lastName.value.trim().length === 0
    ? (lastNameError.value = 'last name required')
    : (lastNameError.value = '')

  // if there are no errors it will navigate to /additional-info
  if (!firstNameError.value && !lastNameError.value) {
    router.push('/additional-info')
  }
}
</script>

<template>
  <FormCard>
    <h1 class="text-xl font-bold mb-4 text-center">Personal Information</h1>
    <form @submit.prevent="submitForm">
      <FormInput
        v-model="firstName"
        label="First Name"
        id="firstName"
        type="text"
        :errors="[firstNameError]"
      />

      <FormInput
        v-model="lastName"
        label="Last Name"
        id="lastName"
        type="text"
        :errors="[lastNameError]"
      />

      <!-- Submit Button -->
      <div class="flex justify-center">
        <button
          type="submit"
          class="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-300 hover:text-gray-700"
        >
          Next
        </button>
      </div>
    </form>
  </FormCard>
</template>
