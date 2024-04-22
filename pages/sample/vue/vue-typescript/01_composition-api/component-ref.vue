<!-- App.vue -->
<script setup lang="ts">
import MyModal from '~/components/sample/MyModal.vue'

const modal = ref<InstanceType<typeof MyModal> | null>(null)

const openModal = () => {
  modal.value?.open()
}

// コンポーネントの正確な型がわからない場合や重要でない場合は、代わりに ComponentPublicInstance を使用
import { ref } from 'vue'
import type { ComponentPublicInstance } from 'vue'

const child = ref<ComponentPublicInstance | null>(null)
</script>