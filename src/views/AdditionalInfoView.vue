<script setup>
import { toRefs, inject } from 'vue'
import { useRouter } from 'vue-router'
import FormInput from '../components/FormInput.vue'
import FormCard from '../components/FormCard.vue'

const formState = inject('formState')
const { dob, hcn, gender, dobError, hcnError, genderError } = toRefs(formState)

const router = useRouter() // router

// validate healthcard number using MOD10 technique
function validateHCN(value) {
  let sum = 0
  for (let i = 0; i < value.length; i++) {
    let num = parseInt(value[i])
    if ((value.length - i) % 2 === 0) {
      num *= 2
      if (num > 9) {
        num -= 9
      }
    }
    sum += num
  }
  return sum % 10 === 0
}

// handle submit form
const submitForm = () => {
  // validate date of birth
  dob.value.trim().length === 0
    ? (dobError.value = 'Date of birth required')
    : (dobError.value = '')

  // validate healthcard number
  hcn.value.trim().length === 0
    ? (hcnError.value = 'Health Card number required')
    : validateHCN(hcn.value)
      ? (hcnError.value = '')
      : (hcnError.value = 'Invalid Health Card number')

  // validate gender
  gender.value.trim().length === 0
    ? (genderError.value = 'gender required')
    : (genderError.value = '')

  if (!dobError.value && !hcnError.value && !genderError.value) {
    router.push('/summary')
  }
}
</script>

<template>
  <FormCard>
    <h1 class="text-xl font-bold mb-4 text-center">Additional Information</h1>
    <form @submit.prevent="submitForm">
      <FormInput
        v-model="dob"
        label="Date of Birth"
        id="dob"
        type="date"
        :errors="[dobError]"
      />
      <FormInput
        v-model="hcn"
        label="Health Card Number"
        id="hcn"
        type="number"
        :errors="[hcnError]"
      />
      <FormInput
        v-model="gender"
        label="Gender"
        id="gender"
        type="select"
        :options="['Male', 'Female', 'Other']"
        :errors="[genderError]"
      />
      <div class="flex gap-5 justify-center">
        <button
          @click="
            () => {
              router.push('/personal-info')
            }
          "
          class="mt-4 bg-blue-500 px-4 py-2 text-white rounded"
        >
          Previous
        </button>

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
