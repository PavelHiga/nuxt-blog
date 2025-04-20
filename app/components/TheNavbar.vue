<template>
  <footer class="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white/80 backdrop-blur-xs overflow-visible z-50">
    <nav class="flex justify-center relative">
      <ul class="flex text-muted-foreground gap-10 py-2 items-center">
        <li>
          <NuxtLink to="/home" class="flex flex-col items-center">
            <Icon name="hugeicons:home-11" size="36" />
            <p class="text-xs mt-1">Home</p>
          </NuxtLink>
        </li>
        <li>
          <DialogTrigger class="relative flex items-center justify-center">
            <div class="absolute w-20 h-20 bg-red-100 rounded-full -top-7 z-0"></div>
            <button class="flex flex-col items-center justify-center bg-red-400 text-white rounded-full w-[72px] h-[72px] shadow-lg transform -translate-y-6 relative z-10">
              <Icon name="hugeicons:wallet-add-01" mode="svg" size="36" />
            </button>
          </DialogTrigger>
        </li>
        <li>
          <NuxtLink to="/operations" class="flex flex-col items-center">
            <Icon name="hugeicons:transaction" size="36" />
            <p class="text-xs mt-1">Operations</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup lang="ts">

import { DialogTrigger } from "~/components/ui/dialog";
</script>

<style scoped>

</style>