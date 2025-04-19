<template>
  <Card :class="cn('p-3', $attrs.class ?? '')">
    <CardContent :class="cn('p-0', $attrs.class ?? '')">
      <div class="flex gap-4">
        <div :class="`${currentCard.color} rounded-md p-2`">
          <Icon :name="currentCard.icon" size="40" mode="svg"/>
        </div>
        <div>
          <p class="text-muted-foreground text-xm">Total {{ props.type.toLowerCase() }}</p>
          <span class="text-xl">${{ props.amount }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { cn } from "~/lib/utils";
import { Card, CardContent } from "~/components/ui/card";
import type { TSummaryCardConfig, TSummaryCardVariant } from "~/types";

interface IProps {
  type: TSummaryCardVariant,
  amount: number
}

const props = defineProps<IProps>()

const cards: Record<TSummaryCardVariant, TSummaryCardConfig> = {
  'INCOME': {
    color: 'bg-emerald-400/20 text-emerald-500',
    icon: 'hugeicons:trade-up'
  },
  'EXPENSE': {
    color: 'bg-red-400/20 text-red-500',
    icon: 'hugeicons:trade-down'
  },
  'BALANCE': {
    color: 'bg-blue-400/20 text-blue-500',
    icon: 'hugeicons:wallet-01'
  }
}

const currentCard = computed(() => cards[props.type])
</script>


<style scoped>

</style>