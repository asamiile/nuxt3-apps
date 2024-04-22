<script setup lang="ts">

// 初期値から型推論
// import { ref } from 'vue'

// 推論された型: Ref<number>
// const year = ref(2020)

// => TS Error: Type 'string' is not assignable to type 'number'.
// year.value = '2020'


// Ref 型
// import { ref } from 'vue'
// import type { Ref } from 'vue'

// const year: Ref<string | number> = ref('2020')

// year.value = 2020 // ok!


// ref() を呼ぶ時に型引数を渡すことで、推論された型を上書き
// 型: Ref<string | number>
// const year = ref<string | number>('2020')

// year.value = 2020 // ok!


// 型引数を指定して初期値を省略した場合には、型は undefined を含む union 型になる
// 推論された型: Ref<number | undefined>
  const n = ref<number>()
</script>