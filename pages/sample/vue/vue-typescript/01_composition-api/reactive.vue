<script setup lang="ts">

// 初期値から型推論
// import { reactive } from 'vue'

// 推論された型: { title: string }
// const book = reactive({ title: 'Vue 3 Guide' })


// 明示的に型付け
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 Guide' })
</script>