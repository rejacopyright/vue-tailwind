<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import store from '@store'

onMounted(() => {
  setTimeout(() => {
    store.setAboutIsReady(true)
  }, 100)
  setTimeout(() => {
    store.setActiveBack(true)
  }, 1000)
})

onBeforeUnmount(() => {
  setTimeout(() => {
    store.setAboutIsReady(false)
    store.setActiveBack(false)
  }, 100)
})

const isReady: any = computed(() => store.aboutIsReady && store.activeBack)
const isNotReady: any = computed(() => !store.activeBack || !store.aboutIsReady)
</script>
<template>
  <div
    class="absolute overflow-hidden w-full h-full top-[-100vh] transition-[top] duration-[300ms] ease-[cubic-bezier(0.98, -0.13, 0.07, 1.1)]"
    :class="{ 'top-[0px]': store.aboutIsReady }"
  >
    <div
      class="w-full h-full bg-no-repeat bg-cover bg-center bg-about transition-[filter] duration-[2s] ease-custom-in-out"
      :class="{ grayscale: store.aboutIsReady, 'grayscale-0': !store.aboutIsReady }"
    />
    <div
      class="absolute overflow-hidden w-[60%] h-[60%] z-[2] top-[25%] right-[2rem] font-montserrat"
    >
      <div class="relative">
        <div class="absolute">
          <div class="w-[100px]">
            <div
              class="h-[12px] bg-[#FFB800] transition-all duration-[300ms] ease-custom-in-out"
              :class="{ 'w-full': isReady, 'w-[0px]': isNotReady }"
            />
          </div>
          <div class="h-[85px]">
            <div
              class="w-[12px] bg-[#FFB800] transition-all duration-[300ms] ease-custom-in-out"
              :class="{ 'h-full': isReady, 'h-[0px]': isNotReady }"
            />
          </div>
        </div>
      </div>
      <div
        class="overflow-hiddens shadow-3xl bg-[rgba(255,255,255,0.5)] rounded-xl m-8 transition-all duration-[300ms] ease-custom-in-out"
        :class="{ 'translate-x-[0px]': isReady, 'translate-x-[150%]': isNotReady }"
      >
        <div class="text-[#2D2D2D] p-10">
          <div class="font-bold text-[50px] mb-6">
            Our People <br />
            Come First
          </div>
          <div
            class="font-medium text-[27.5px] transition-all duration-[400ms] ease-custom-in-out"
            :class="{
              'translate-x-[0px]': isReady,
              'translate-x-[150%]': isNotReady,
            }"
          >
            We are independently owned, strategic creative agency forever curious and ready to
            transform the way business is done.
          </div>
        </div>
      </div>
      <div
        class="w-full h-full transition-all duration-[400ms] ease-custom-in-out"
        :class="{
          'translate-y-[0px]': isReady,
          'translate-y-[100%]': isNotReady,
        }"
      >
        <div
          class="bg-[#FFB800] hover:bg-[#DDD] text-[white] hover:text-[#777] hover:opacity-75 float-right px-6 py-3 rounded-lg cursor-pointer font-semibold text-[14pt] me-8 transition-all duration-[300ms] ease-in-out"
        >
          Learn More
        </div>
      </div>
    </div>
  </div>
</template>
