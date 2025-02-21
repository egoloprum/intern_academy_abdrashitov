import type { StoryObj } from '@storybook/react';
import { Button } from './Button';

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
    children: ''
  },
}

export const OnMini: Story = {
  args: {
    children: '',
    isMini: true
  },
}

export const OnRounded: Story = {
  args: {
    children: '',
    isRounded: true
  },
}
