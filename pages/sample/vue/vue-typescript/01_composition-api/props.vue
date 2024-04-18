<script setup lang="ts">

// https://ja.vuejs.org/guide/typescript/composition-api
// const props = defineProps({
//   foo: { type: String, required: true },
//   bar: Number
// })

// props.foo // string
// props.bar // number | undefined

// 型引数で書く場合
// const props = defineProps<{
//   foo: string
//   bar?: number
// }>()

// インターフェースで書く場合
// interface Props {
//   foo: string
//   bar?: number
// }

// // const props = defineProps<Props>()


// props のデフォルト値
// export interface Props {
//   msg?: string
//   labels?: string[]
// }

// const props = withDefaults(defineProps<Props>(), {
//   msg: 'hello',
//   labels: () => ['one', 'two']
// })


</script>

<template>
  <section>
    <!-- <p>{{ foo }}</p>
    <p>{{ bar }}</p> -->

    <!-- <p>{{ msg }}</p>
    <p>{{ labels }}</p> -->
  </section>
</template>