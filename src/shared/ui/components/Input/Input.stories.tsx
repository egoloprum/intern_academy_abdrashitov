import type { StoryObj } from '@storybook/react';
import Input from './Input';

const meta = {
  component: Input,
  title: 'Input/Input',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {
    disabled: false
  }
}

export const OnRounded: Story = {
  args: {
    disabled: false,
    rounded: true
  }
}

export const OnError: Story = {
  args: {
    disabled: false,
    error: true
  }
}

export const OnDisabled: Story = {
  args: {
    disabled: true
  }
}

