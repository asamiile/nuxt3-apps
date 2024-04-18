<script setup>
import { shallowRef } from 'vue'
import CompA from '~/components/sample/keep-alive/CompA.vue'
import CompB from '~/components/sample/keep-alive/CompB.vue'

const current = shallowRef(CompA)


// キャッシュされたインスタンスのライフサイクル
import { onActivated, onDeactivated } from 'vue'

onActivated(() => {
  // 最初のマウントと
  // キャッシュからの再挿入のたびに呼ばれる
})

onDeactivated(() => {
  // DOM から削除されてキャッシュに挿入されるときと
  // アンマウントされるときにも呼ばれる
})


</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>

    <!-- Include / Exclude -->
    <!-- カンマ区切りの文字列 -->
    <!-- <KeepAlive include="a,b">
      <component :is="view" />
    </KeepAlive> -->

    <!-- 正義表現（`v-bind` を使用）-->
    <!-- <KeepAlive :include="/a|b/">
      <component :is="view" />
    </KeepAlive> -->

    <!-- 配列（`v-bind` を使用）-->
    <!-- <KeepAlive :include="['a', 'b']">
      <component :is="view" />
    </KeepAlive> -->

    <!-- キャッシュインスタンスの最大数 -->
    <!-- <KeepAlive :max="10">
      <component :is="activeComponent" />
    </KeepAlive> -->

  </div>
</template>
