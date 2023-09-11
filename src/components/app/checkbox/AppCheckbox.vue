<script setup lang="ts" generic="T, TValue extends T">
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from '@headlessui/vue'
import AppIcon from '@/components/app/icon/AppIcon.vue'

interface Props {
  option: T
  optionLabel?: TValue
  optionValue?: TValue
  optionDescription?: TValue
  optionDisabled?: TValue
  // variant?: RadioProps['variant']
}
const {
  option = {},
  // variant = 'default',
} = defineProps<Props>()

const model = defineModel<T[keyof T]>()
</script>

<template>
  <div>
    <SwitchGroup>
      <div>
        <SwitchLabel class="text-body font-medium">
          {{ (option as any)[optionLabel] }}
        </SwitchLabel>
        <SwitchDescription class="text-subtext">
          {{ (option as any)[optionDescription] }}
        </SwitchDescription>
      </div>
      <!-- eslint-disable-next-line vue/valid-v-model -->
      <Switch v-slot="{ checked }" v-model="(model as any)">
        <button
          class="flex h-6 w-6 items-center justify-center rounded bg-neutral-800 text-white"
        >
          <AppIcon v-if="checked" icon="checkmark" />
        </button>
      </Switch>
    </SwitchGroup>
  </div>
</template>
