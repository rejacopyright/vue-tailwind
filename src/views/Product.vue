<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import { useRouter, type Router } from 'vue-router'
import store from '@store'

const router: Router = useRouter()
const previousRouteIsAbout: boolean =
  router?.options?.history?.state?.back?.toString?.()?.split?.('/')?.reverse?.()?.[0] === 'about'

const currentCard: any = computed(() => store.currentProductCard)

const cards: Array<{ name: string; title: string }> = [
  { name: 'one', title: 'We Know \n You Have' },
  { name: 'two', title: 'We Solve \n Your' },
  { name: 'three', title: 'We Know \n You Have' },
]

onMounted(() => {
  setTimeout(() => {
    store.setProductIsReady(true)
  }, 100)
  setTimeout(() => {
    store.setActiveBack(true)
  }, 1000)
})

onBeforeUnmount(() => {
  setTimeout(() => {
    store.setProductIsReady(false)
    store.setActiveBack(false)
  }, 100)
})

const onClickPlayButton = () => {
  store.setCurrentProductCard(currentCard?.value === 'one' ? 'two' : 'one')
}

const isReady: any = computed(() => store.productIsReady && store.activeBack)
const isNotReady: any = computed(() => !store.activeBack || !store.productIsReady)
</script>
<template>
  <div
    class="absolute overflow-hidden w-full h-full transition-all duration-[300ms] ease-[cubic-bezier(0.98, -0.13, 0.07, 1.1)]"
    :class="{
      'top-[0px]': store.productIsReady && !previousRouteIsAbout,
      'top-[-100vh]': !previousRouteIsAbout,
      'bottom-[0px]': store.productIsReady && previousRouteIsAbout,
      'bottom-[-100vh]': previousRouteIsAbout,
    }"
  >
    <div
      class="w-full h-full bg-no-repeat bg-cover bg-center bg-product transition-[filter] duration-[2s] ease-custom-in-out"
      :class="{ grayscale: store.productIsReady, 'grayscale-0': !store.productIsReady }"
    />
    <div
      class="absolute overflow-hidden w-[30rem] z-[2] top-[25%] font-montserrat transition-all duration-[300ms] ease-custom-in-out"
      :class="{ 'right-0': isReady, 'right-[150%]': isNotReady }"
    >
      <div class="absolute cursor-pointer right-[1.25rem] top-[8.5rem] z-[3]">
        <div
          class="h-[75px] w-[75px] rounded-full flex items-center justify-center transition-all duration-[300ms] ease-custom-in-out"
          :class="{
            'bg-[#FFB800]': !store.productPlayIsHovered,
            'bg-[#FFF] opacity-[85%]': store.productPlayIsHovered,
          }"
          @mouseenter="() => store.setProductPlayIsHovered(true)"
          @mouseleave="() => store.setProductPlayIsHovered(false)"
          @click="onClickPlayButton"
        >
          <div
            class="play transition-all duration-[300ms] ease-custom-in-out"
            :class="{
              'border-l-[#FFB800]': store.productPlayIsHovered,
              'border-l-[#FFF]': !store.productPlayIsHovered,
            }"
          />
        </div>
      </div>
      <div
        class="grid grid-flow-col auto-cols-max transition-[transform] duration-[300ms] ease-custom-in-out"
        :class="{ 'translate-x-[-28.5rem]': store.currentProductCard !== 'one' }"
      >
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="shadow-3xl bg-[rgba(255,255,255,0.5)] w-[25rem] h-[20rem] rounded-xl m-5 transition-all duration-[300ms] ease-custom-in-out"
        >
          <div class="text-[#2D2D2D] p-10 relative">
            <div class="font-bold text-[45px] mb-6">{{ card?.title }}</div>
            <div
              class="font-extrabold text-[#FFB800] text-[55px] transition-all duration-[400ms] ease-custom-in-out absolute"
              :class="{
                'translate-x-[0px]': isReady,
                'translate-x-[150%]': isNotReady,
              }"
            >
              PROBLEM
            </div>
            <div
              class="animate-problem-word font-extrabold text-[white] text-[55px] transition-all duration-[400ms] ease-custom-in-out absolute overflow-hidden"
              :class="{
                'translate-x-[0px]': isReady,
                'translate-x-[150%]': isNotReady,
              }"
            >
              PROBLEM
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.play {
  width: 0;
  height: 0;
  margin-left: 10px;
  border-top: 16px solid transparent;
  border-left-width: 25px;
  border-left-style: solid;
  border-bottom: 16px solid transparent;
}
.animate-problem-word {
  animation: problem-word 2s infinite;
}
@keyframes problem-word {
  0% {
    width: 100%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
  10% {
    width: 100%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
  20% {
    width: 0%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
  80% {
    width: 0%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
  90% {
    width: 100%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
  100% {
    width: 100%;
    animation-timing-function: cubic-bezier(1, -0.01, 0.09, 1);
  }
}
</style>
