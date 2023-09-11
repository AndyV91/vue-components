<script setup lang="ts">
import { reactive, ref } from 'vue'
import AppButton from '@/components/app/button/AppButton.vue'
import { buttonSizeOptions, buttonVariantOptions } from '@/components/app/button/appButton.style'
import type { ButtonProps } from '@/components/app/button/appButton.style'
import { iconNames } from '@/icons'
import type { Icon } from '@/icons'
import AppCheckbox from '@/components/app/checkbox/AppCheckbox.vue'

interface Option {
  label: string
  description: string
  value: boolean
  isDisabled: boolean
  icon?: Icon
}

interface State {
  option: Option
  optionLabel?: keyof Option
  optionValue?: keyof Option
  optionDescription?: keyof Option
  optionDisabled?: keyof Option
}

const model = ref<boolean>(false)

const state: State = reactive({
  option: {
    label: 'Option n°1',
    description: 'lorem',
    value: false,
    isDisabled: false,
    icon: 'download',
  },
  optionLabel: 'label',
  optionValue: 'value',
  optionDescription: 'description',
  optionDisabled: 'isDisabled',
})
</script>

<template>
  <Story
    title="App/Checkbox/AppCheckbox"
  >
    <Variant title="Default" auto-props-disabled>
      <template #controls>
        <HstCheckbox v-model="state.option.isDisabled" title="Option disabled" />
      </template>

      <div class="grid h-20 w-20 place-items-center">
        <AppCheckbox
          v-model="model"
          v-bind="state"
        />
      </div>
      <p>
        Model: {{ model }}
      </p>
    </Variant>
  </Story>
</template>
