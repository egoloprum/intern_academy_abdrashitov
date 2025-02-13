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
  },
}

export const OnMini: Story = {
  args: {
    isMini: true
  },
}

export const OnRounded: Story = {
  args: {
    isRounded: true
  },
}

export const OnWithoutIcons: Story = {
  args: {
    isIconsNeeded: false
  },
}

export const OnDisabled: Story = {
  args: {
    isDisabled: true
  },
}
