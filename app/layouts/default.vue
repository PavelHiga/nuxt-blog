<template>
  <Dialog>
    <div class="min-h-svh flex flex-col">
      <main class="container-wrapper border-x-1 flex-1 py-5">
        <h1 class="text-2xl font-bold leading-tight">{{ currentRoute }}</h1>
        <slot />
      </main>
      <TheNavbar />
    </div>
  </Dialog>
</template>


<script setup lang="ts">
import { capitalizeFirstLetter } from "~/utils";
import TheNavbar from "~/components/TheNavbar.vue";
import { Dialog } from "~/components/ui/dialog";

const route = useRoute()

const currentRoute = computed(() => capitalizeFirstLetter(typeof route?.name === "string" ? route?.name : ""))
</script>

<style scoped>

</style>
