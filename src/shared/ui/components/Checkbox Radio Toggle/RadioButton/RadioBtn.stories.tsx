import type { StoryObj } from '@storybook/react';
import RadioBtn from './RadioBtn';

const meta = {
  component: RadioBtn,
  title: 'Checkbox/RadioBtn',
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
