<script setup>
import { useMouse } from '~/composables/useMouse.ts'

const { x, y } = useMouse()

// const mouse = reactive(useMouse())
// // mouse.x は元の ref とリンクされる
// console.log(mouse.x)
</script>

<template>Mouse position is at: {{ x }}, {{ y }}</template>