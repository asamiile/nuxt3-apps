<template>
  <input
    v-bind="{ ...$attrs, onChange: updateValue }"
    :checked="modelValue"
    :id="uuid"
    type="checkbox"
    class="field"
  />
  <label
    :for="uuid"
    v-if="label"
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
    type: Boolean,
    default: false
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
