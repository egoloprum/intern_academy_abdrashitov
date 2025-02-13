import type { StoryObj } from '@storybook/react';
import NestedCheckbox from './NestedCheckbox';

const meta = {
  component: NestedCheckbox,
  title: 'Checkbox/NestedCheckbox',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnDefault: Story = {
  args: {

  }
}

