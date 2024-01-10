import { Meta, StoryObj } from '@storybook/react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} as Meta

export const Default: StoryObj<typeof Main> = {}
