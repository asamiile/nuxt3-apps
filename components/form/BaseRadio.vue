<template>
  <input
      type="radio"
      v-bind="{ ...$attrs, onChange: updateValue }"
      :checked="modelValue === value"
      :id="uuid"
    />
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <BaseErrorMessage
    v-if="error"
    :id="`${uuid}-error`"
  >
    {{ error }}
  </BaseErrorMessage>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import useUniqueID from '~/composables/useUniqueID'
import useUpdateValue from '~/composables/useUpdateValue'
import BaseErrorMessage from "~/components/form/BaseErrorMessage.vue";

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number]
  },
  value: {
    type: [String, Number]
  },
  error: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const { getID } = useUniqueID()
const uuid = getID()
const { updateValue } = useUpdateValue(props, { emit })
</script>
