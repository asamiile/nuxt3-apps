<script setup lang="ts">
// 実行時の宣言
// const emit = defineEmits(['change', 'update'])

// オプションベースの宣言
// const emit = defineEmits({
//   change: (id: number) => {
//     // バリデーションの合格/不合格を示すための
//     // `true` または `false` を返す
//   },
//   update: (value: string) => {
//     // バリデーションの合格/不合格を示すための
//     // `true` または `false` を返す
//   }
// })

// 型ベースの宣言
// const emit = defineEmits<{
//   (e: 'change', id: number): void
//   (e: 'update', value: string): void
// }>()

// 3.3+: より簡潔な代替の構文
const emit = defineEmits<{
  change: [id: number]
  update: [value: string]
}>()
</script>