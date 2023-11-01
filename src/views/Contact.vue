<script lang="ts" setup>
import { onMounted, onBeforeUnmount, computed } from 'vue'
import store from '@store'

onMounted(() => {
  setTimeout(() => {
    store.setContactIsReady(true)
  }, 100)
  setTimeout(() => {
    store.setActiveBack(true)
  }, 1000)
})

onBeforeUnmount(() => {
  setTimeout(() => {
    store.setContactIsReady(false)
    store.setActiveBack(false)
  }, 100)
})

const isReady: any = computed(() => store.contactIsReady && store.activeBack)
const isNotReady: any = computed(() => !store.activeBack || !store.contactIsReady)
</script>
<template>
  <div
    class="absolute overflow-hidden w-full h-full bottom-[-100vh] transition-[bottom] duration-[300ms] ease-[cubic-bezier(0.98, -0.13, 0.07, 1.1)]"
    :class="{ 'bottom-[0px]': store.contactIsReady }"
  >
    <div
      class="w-full h-full bg-no-repeat bg-cover bg-center bg-contact transition-[filter] duration-[2s] ease-custom-in-out"
      :class="{ grayscale: store.contactIsReady, 'grayscale-0': !store.contactIsReady }"
    />
    <div class="absolute w-[60%] h-auto z-[2] top-[20%] right-[2rem] font-montserrat">
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
        class="shadow-3xl bg-[rgba(255,255,255,0.5)] rounded-xl m-8 transition-all duration-[300ms] ease-custom-in-out"
        :class="{ 'scale-100': isReady, 'scale-0': isNotReady }"
      >
        <div class="text-[#2D2D2D] p-10 relative">
          <div class="mb-10">
            <div class="font-bold text-[30px] mb-3">
              Type your <br />
              beautiful name
            </div>
            <div
              class="font-medium text-[20px] text-[#777] mb-6 bg-[#D9D9D9] py-4 px-6 text-center rounded-xl"
            >
              in here of course :)
            </div>
          </div>
          <div class="my-10">
            <div class="font-bold text-[30px] mb-3">
              Protect your email <br />
              address
            </div>
            <div
              class="font-medium text-[20px] text-[#777] mb-6 bg-[#D9D9D9] py-4 px-6 text-center rounded-xl"
            >
              but not in here :)
            </div>
          </div>
          <div class="mt-[4rem]">
            <div
              class="text-center bg-[#FFB800] hover:bg-[#DDD] text-[white] hover:text-[#777] hover:opacity-75 py-5 rounded-xl cursor-pointer font-semibold text-[16pt] transition-all duration-[300ms] ease-in-out"
            >
              Submit
            </div>
          </div>
        </div>
      </div>
      <div class="absolute right-0 bottom-0 rotate-180">
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
  </div>
</template>
