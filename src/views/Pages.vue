<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView, useRoute, type RouteLocationNormalizedLoaded } from 'vue-router'
import store from '@store'
const { name: routerName }: RouteLocationNormalizedLoaded = useRoute()
const routes: Array<{ name: string; title: string }> = [
  { name: 'about', title: 'About Us' },
  { name: 'product', title: 'Our Product' },
  { name: 'contact', title: 'Contact Us' },
]
onMounted(() => {
  store.setCurrentPage(routerName as string)
})
</script>
<template>
  <div class="w-full">
    <div class="grid grid-flow-row-dense grid-cols-3">
      <div class="bg-slate-300x h-screen relative">
        <div
          class="absolute z-[1] top-0 w-full h-[30vh] bg-[#FFB800] transition-all duration-[300ms] ease-custom-in-out"
          :class="{ 'left-[0%]': store.activeBack, 'left-[-100%]': !store.activeBack }"
        />
        <div class="absolute z-[2] left-[2rem] top-[2rem]">
          <RouterLink to="/" class="flex items-center gap-3 cursor-pointer">
            <img
              src="@assets/arrow-back.svg"
              class="h-[15px] transition-[filter] duration-[300ms] ease-custom-in-out"
              :class="{ 'brightness-0 invert': store.activeBack }"
            />
            <span
              class="font-montserrat font-semibold transition-color duration-[300ms] ease-custom-in-out"
              :class="{ 'text-[#FFFFFF]': store.activeBack, 'text-[#000000]': !store.activeBack }"
              >Back</span
            >
          </RouterLink>
        </div>
        <div
          class="absolute z-[1] right-[-12rem] bottom-[10rem] font-montserrat text-[#FFB800] text-[65px] font-bold"
        >
          <div v-for="(route, index) in routes" :key="index" class="flex items-center my-5">
            <div class="w-[120px] me-5">
              <div
                class="h-[18px] w-[0px] bg-[#FFB800] transition-all duration-[300ms] ease-custom-in-out"
                :class="{ 'w-full': store.currentPage === route?.name }"
              />
            </div>
            <RouterLink
              @click="() => store.setCurrentPage(route?.name)"
              class="nav-link cursor-pointer whitespace-nowrap transition-color duration-[200ms] ease-custom-in-out"
              :to="'/pages/' + route?.name"
            >
              {{ route?.title }}
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="col-span-2 relative overflow-hidden">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #1f1f1f;
}
a.nav-link:not(.router-link-active):hover {
  opacity: 0.25;
}
.nav-link.router-link-active {
  color: #ffb800;
}
</style>
