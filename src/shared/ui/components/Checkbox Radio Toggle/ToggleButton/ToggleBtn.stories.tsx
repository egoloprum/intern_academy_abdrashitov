import type { StoryObj } from '@storybook/react';
import ToggleBtn from './ToggleBtn';

const meta = {
  component: ToggleBtn,
  title: 'Checkbox/ToggleBtn',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnDefault: Story = {
  args: {}
}

export const OnDisabled: Story = {
  args: {isDisabled: true}
}
