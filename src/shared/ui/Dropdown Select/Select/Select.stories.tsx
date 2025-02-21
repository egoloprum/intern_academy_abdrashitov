import type { StoryObj } from '@storybook/react';
import Select from './Select';

const meta = {
  component: Select,
  title: 'Dropdown/Select',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {}
}
