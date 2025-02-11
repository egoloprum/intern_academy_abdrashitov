import type { StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';

const meta = {
  component: Dropdown,
  title: 'Dropdown/Dropdown',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {}
};
