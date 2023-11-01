<script lang="ts" setup>
import store from '@store'
import { onBeforeUnmount, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

store.setImageHomeIsHovered(false)
store.setFootHomeIsHovered(false)

onMounted(() => {
  setTimeout(() => {
    store.setHomeIsReady(true)
  }, 100)
})

onBeforeUnmount(() => {
  setTimeout(() => {
    store.setHomeIsReady(false)
  }, 100)
})
</script>
<template>
  <div
    class="flex w-full flex-nowrap items-center justify-center font-montserrat overflow-hidden relative"
  >
    <div class="absolute right-[2.5rem] top-[2.5rem] z-[1]">
      <div class="flex items-center gap-5 rotate-180">
        <div class="w-[140px]">
          <div
            class="h-[18px] w-[0px] bg-[#FFB800] transition-all duration-[800ms] delay-100 ease-custom-in-out"
            :class="{ 'w-full': store.imageHomeIsHovered }"
          />
        </div>
        <div class="w-[67px]">
          <div
            class="h-[18px] w-[0px] bg-[#FFB800] transition-all duration-[800ms] delay-100 ease-custom-in-out"
            :class="{ 'w-full': store.imageHomeIsHovered }"
          />
        </div>
      </div>
    </div>
    <div class="absolute left-[2.5rem] bottom-[2.5rem] z-[1]">
      <div class="flex items-center gap-5">
        <div class="w-[140px]">
          <div
            class="h-[18px] w-[0px] bg-[#FFB800] transition-all duration-[800ms] delay-100 ease-custom-in-out"
            :class="{ 'w-full': store.imageHomeIsHovered }"
          />
        </div>
        <div class="w-[67px]">
          <div
            class="h-[18px] w-[0px] bg-[#FFB800] transition-all duration-[800ms] delay-100 ease-custom-in-out"
            :class="{ 'w-full': store.imageHomeIsHovered }"
          />
        </div>
      </div>
    </div>
    <div
      class="relative transition-all duration-[500ms] ease-custom-in-out"
      :class="{
        'w-[75vw] xl:w-[70vw] h-[60vh] translate-x-[0%]': store.homeIsReady,
        'w-[70vw] h-[100vh] translate-x-[18vw]': !store.homeIsReady,
      }"
    >
      <div
        class="absolute text-[#FFB800] z-[1] top-[-5.5rem] left-[-5.5rem] font-bold whitespace-nowrap text-[150px] transition-all duration-[800ms] delay-100 ease-custom-in-out"
        :class="{ 'text-[160px]': store.imageHomeIsHovered, 'opacity-0': !store.homeIsReady }"
      >
        We Create
      </div>
      <div class="overflow-hidden w-full h-full">
        <div
          @mouseenter="() => store.setImageHomeIsHovered(true)"
          @mouseleave="() => store.setImageHomeIsHovered(false)"
          class="w-full h-full bg-no-repeat bg-cover bg-center bg-home grayscale transition-all duration-[800ms] delay-100 ease-custom-in-out"
          :class="{ 'scale-150 grayscale-0': store.imageHomeIsHovered }"
        />
      </div>
      <div
        class="absolute cursor-pointer z-[1] h-[150px] w-[45rem] bottom-[-5rem] left-[-100vw] bg-[#FFB800] rounded-xl transition-all duration-[300ms] ease-custom-in-out"
        :class="{ 'left-[-5rem]': store.footHomeIsHovered }"
        @mouseenter="
          () => {
            store.setImageHomeIsHovered(true)
            store.setFootHomeIsHovered(true)
          }
        "
        @mouseleave="
          () => {
            store.setImageHomeIsHovered(false)
            store.setFootHomeIsHovered(false)
          }
        "
      />
      <RouterLink
        to="/pages/about"
        class="absolute cursor-pointer z-[2] flex items-center bottom-[-0.2rem]"
        @mouseenter="
          () => {
            store.setImageHomeIsHovered(true)
            store.setFootHomeIsHovered(true)
          }
        "
        @mouseleave="
          () => {
            store.setImageHomeIsHovered(false)
            store.setFootHomeIsHovered(false)
          }
        "
      >
        <div
          class="absolute text-[#FFB800] leading-none z-[1] left-[-100vw] font-bold whitespace-nowrap text-[50px] transition-[left] duration-[800ms] delay-100 ease-custom-in-out"
          :class="{
            'left-[-2.5rem]': store.imageHomeIsHovered,
            'text-[#FFFFFF]': store.footHomeIsHovered,
          }"
        >
          <span class="transition-color duration-[300ms] ease-custom-in-out"> AWESOME THINGS </span>
        </div>
        <div
          class="absolute cursor-pointer transition-all duration-[800ms] delay-100 ease-custom-in-out right-[-100rem]"
          :class="{ 'right-[-37.5rem]': store.imageHomeIsHovered }"
        >
          <img
            src="@assets/home-arrow.svg"
            class="h-[50px] transition-[filter] duration-[300ms] ease-custom-in-out"
            :class="{ 'brightness-0 invert': store.footHomeIsHovered }"
          />
        </div>
      </RouterLink>
    </div>
  </div>
</template>
