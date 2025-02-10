import type { StoryObj } from '@storybook/react';
import Button from './Button';

const meta = {
  component: Button,
  title: 'Button',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnHover: Story = {
  args: {
    label: 'Button',
  },
};
