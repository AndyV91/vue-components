import { defineConfig } from 'cva'
import { twMerge } from '@/utils/tailwind/twMerge'

export type { VariantProps } from 'cva'
export const { cva, cx, compose } = defineConfig({
  hooks: {
    onComplete: (css) => {
      return twMerge(css)
    },
  },
})
