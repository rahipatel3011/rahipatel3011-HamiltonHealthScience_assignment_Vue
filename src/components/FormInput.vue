<script setup>
import { defineProps, defineEmits, toRefs } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  id: String,
  type: String,
  options: {
    type: Array,
    default: () => [],
  },
  errors: {
    type: Array,
    default: () => [],
  },
})
const { modelValue } = toRefs(props)

const emit = defineEmits(['update:modelValue'])

const updateValue = event => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="mb-4">
    <label :for="id" class="block text-gray-700 text-sm font-bold mb-2">{{
      label
    }}</label>
    <select
      v-if="type === 'select'"
      :value="modelValue"
      @input="updateValue"
      :id="id"
      class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option v-for="option in options" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <input
      v-else
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateValue"
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    />
    <span v-if="errors.length" class="text-red-500">{{ errors[0] }}</span>
  </div>
</template>
