<template>
  <label
    v-if="label"
    :for="uuid"
  >
    {{ label }}
  </label>
  <select
    class="field"
    v-bind="{
      ...$attrs,
      onChange: updateValue
    }"
    :value="modelValue"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : false"
    :class="{ error }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
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
  options: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number]
    }
})

const emit = defineEmits(['update:modelValue'])

const { getID } = useUniqueID()
const uuid = getID()
const { updateValue } = useUpdateValue(props, { emit })
</script>
