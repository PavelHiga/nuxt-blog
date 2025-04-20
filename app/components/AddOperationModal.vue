<template>
  <DialogContent class="w-5/6">
    <DialogHeader>
      <DialogTitle>Add operation</DialogTitle>
    </DialogHeader>
    <form @submit="onSubmit" class="space-y-4">

      <FormField v-slot="{ componentField }" name="type">
        <FormItem>
          <FormLabel>Operation type</FormLabel>
          <FormControl>
            <Select v-bind="componentField" class="w-full">
              <FormControl>
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Select the operation type" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="income">Income</SelectItem>
                  <SelectItem value="expense">Expense</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="amount">
        <FormItem>
          <FormLabel>Amount</FormLabel>
          <FormControl>
            <Input v-bind="componentField" type="number" min="0" max="1000000" placeholder="0" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="date">
        <FormItem>
          <FormLabel>Operation Date</FormLabel>
          <Popover>
            <PopoverTrigger as-child>
              <FormControl>
                <Button
                    variant="outline"
                    :class="cn(
                    'w-full ps-3 text-start font-normal',
                    !value && 'text-muted-foreground'
                  )"
                >
                  <span>{{ value ? df.format(toDate(value)) : "Pick a date" }}</span>
                  <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent class="w-full p-0">
              <Calendar
                  v-model="value"
                  calendar-label="Select date"
                  initial-focus
                  :min-value="new CalendarDate(1900, 1, 1)"
                  :max-value="today(getLocalTimeZone())"
                  @update:model-value="(v) => {
                  if (v) {
                    setFieldValue('date', v.toString())
                  } else {
                    setFieldValue('date', undefined)
                  }
                }"
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      </FormField>

      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="Optional description" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>

      <Button type="submit" class="w-full">
        Save
      </Button>

    </form>
  </DialogContent>
</template>


<script setup lang="ts">
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { CalendarIcon } from 'lucide-vue-next'

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { CalendarDate, DateFormatter, getLocalTimeZone, parseDate, today } from '@internationalized/date'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from "vee-validate";
import { cn } from "~/lib/utils";
import { toDate } from 'reka-ui/date'

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const formSchema = toTypedSchema(z.object({
  type: z.enum(['income', 'expense']),
  amount: z.preprocess(
      (val) => val === '' ? undefined : Number(val),
      z.number()
          .int('Amount must be an integer')
          .min(1, 'Minimum amount is 1')
          .max(1000000, 'Maximum amount is 1,000,000')
  ),
  date: z.string()
      .refine(val => !isNaN(Date.parse(val)), {
        message: 'Invalid date format',
      }),
  description: z.string()
      .min(2, 'Description is too short')
      .max(100, 'Description is too long')
      .optional(),
}))

const { handleSubmit, setFieldValue, values } = useForm({
  validationSchema: formSchema,
  initialValues: {
    type: 'income',
    amount: 0,
    date: today(getLocalTimeZone()).toString(),
    description: '',
  }
})

const value = computed({
  get: () => values.date ? parseDate(values.date) : undefined,
  set: val => val,
})

const placeholder = ref()

const onSubmit = handleSubmit((values) => {
  console.log('Form submitted!', values)
})
</script>