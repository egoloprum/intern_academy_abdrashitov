import type { StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Button/Button',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {
    label: 'Button',
  },
}

export const OnMini: Story = {
  args: {
    label: 'Button',
    miniOrFull: true
  },
}

export const OnRounded: Story = {
  args: {
    label: 'Button',
    rounded: true
  },
}

export const OnDisabled: Story = {
  args: {
    label: 'Button',
    disabled: true
  },
}
