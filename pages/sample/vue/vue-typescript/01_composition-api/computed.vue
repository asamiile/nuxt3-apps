<script setup lang="ts">
// import { ref, computed } from 'vue'

// const count = ref(0)

// // 推論された型: ComputedRef<number>
// const double = computed(() => count.value * 2)

// // => TS Error: Property 'split' does not exist on type 'number'
// const result = double.value.split('')


// 明示的に型付け
const double = computed<number>(() => {
  // number を返さない場合は型エラーになる
})
</script>