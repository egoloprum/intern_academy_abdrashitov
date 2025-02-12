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

export const OnTest: Story = {
  args: {}
};
