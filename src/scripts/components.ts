import { appButton } from './components/app/appButton'
import { appModal } from './components/app/appModal'
import { appText } from './components/app/appText'
import { appPopover } from './components/app/appPopover'

import { formError } from './components/form/formError'
import { formInputField } from './components/form/formInputField'
import { formInputGroupComposable } from './components/form/formInputGroupComposable'
import { icons } from './components/icons/icons'
import { transitionExpand } from './components/transitions/transitionExpand'
import { transitions } from './components/transitions/transtitions'
import type { Component } from './componentsTypes'
import { utilsGenerateUuid } from './components/utils/utilsGenerateUuid'

export const components: Component[] = [
  appButton,
  appModal,
  appText,
  appPopover,

  formError,
  formInputField,
  formInputGroupComposable,

  transitionExpand,
  transitions,
  icons,

  utilsGenerateUuid,
]
