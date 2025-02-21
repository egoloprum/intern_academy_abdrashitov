import type { StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta = {
  component: Checkbox,
  title: 'Checkbox/Checkbox',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnDefault: Story = {
  args: {
    mode: 'default'
  }
}

export const OnMinus: Story = {
  args: {
    mode: 'minus'
  }
}

export const OnPlus: Story = {
  args: {
    mode: 'plus'
  }
}
export const OnDisabled: Story = {
  args: {
    mode: 'plus',
    isClicked: true,
    isDisabled: true
  }
}
