<script setup lang="ts">
import { ref, shallowRef } from 'vue'

const show = ref(false)


// 要素間のトランジション
const docState = ref('saved')


// コンポーネント間のトランジション
import CompA from '~/components/sample/transition/CompA.vue'
import CompB from '~/components/sample/transition/CompB.vue'
const activeComponent = shallowRef(CompA)


// キー属性によるトランジション
const count = ref(0);

onMounted(() => {
  setInterval(() => count.value++, 1000);
});
</script>

<template>
  <section>
    <button @click="show = !show">Toggle</button>

    <Transition>
      <p v-if="show">hello</p>
    </Transition>

    <Transition name="slide-fade">
      <p v-if="show">hello</p>
    </Transition>

    <Transition name="bounce">
      <p v-if="show" style="text-align: center;">
        Hello here is some bouncy text!
      </p>
    </Transition>

    <Transition name="nested" :duration="550">
      <div v-if="show" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>

    <Transition name="nested" :duration="{ enter: 500, leave: 800 }">
      <div v-if="show" class="outer">
        <div class="inner">
          Hello
        </div>
      </div>
    </Transition>

    <!-- 要素間のトランジション -->
    <!-- トランジションモード -->
    <div class="btn-container">
      <Transition name="slide-up" mode="out-in">
        <button v-if="docState === 'saved'"
                @click="docState = 'edited'">Edit</button>
        <button v-else-if="docState === 'edited'"
                @click="docState = 'editing'">Save</button>
        <button v-else-if="docState === 'editing'"
                @click="docState = 'saved'">Cancel</button>
      </Transition>
    </div>

    <!-- コンポーネント間のトランジション -->
    <label>
      <input type="radio" v-model="activeComponent" :value="CompA"> A
    </label>
    <label>
      <input type="radio" v-model="activeComponent" :value="CompB"> B
    </label>
    <Transition name="fade" mode="out-in">
      <component :is="activeComponent"></component>
    </Transition>


    <!-- キー属性によるトランジション -->
    <div class="wrapper">
      <Transition>
        <span :key="count">{{ count }}</span>
      </Transition>
    </div>

  </section>
</template>

<style scoped>
/* これらのクラスが何をするかは後ほど説明します! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  enter および leave アニメーションでそれぞれ異なる
  持続時間とタイミング関数を利用できます
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}


.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

/* ネストされた要素を対象にしたルール */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

/* ... その他の必要な CSS は省略 */
/* ネストされた要素の、交互アニメーション効果の enter の遅延 */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}


/* 要素間のトランジション */
.btn-container {
  margin-top: 20rem;
  margin-bottom: 20rem;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}


/* コンポーネント間のトランジション */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* キー属性によるトランジション */
.wrapper{
  position:relative;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>