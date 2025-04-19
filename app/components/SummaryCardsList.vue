<template>
  <div class="flex flex-col gap-3 mt-5">
    <div v-for="(el, key) in cards" class="w-full">
      <SummaryCards :type="el.type" :amount="el.amount" :key="key" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SummaryCards from "~/components/SummaryCard.vue";
import type { TSummaryCardVariant } from "~/types";

type CardItem = {
  type: TSummaryCardVariant;
  amount: number;
};

const cards: CardItem[] = [
  { type: 'BALANCE', amount: 1000 },
  { type: 'INCOME', amount: 1000 },
  { type: 'EXPENSE', amount: 2000 }
];
</script>

<style scoped>

</style>