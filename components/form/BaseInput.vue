<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <input
    class="field"
    v-bind="{
      ...$attrs,
      onInput: updateValue
    }"
    :id="uuid"
    :value="modelValue"
    :placeholder="label"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
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
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: String,
    default: ''
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
