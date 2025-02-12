import type { StoryObj } from '@storybook/react';
import Textarea from './Textarea';

const meta = {
  component: Textarea,
  title: 'Input/Textarea',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {
    
  },
}

export const OnRounded: Story = {
  args: {
    rounded: true
  },
}

export const OnError: Story = {
  args: {
    error: true
  },
}

export const OnDisabled: Story = {
  args: {
    disabled: true
  },
}
