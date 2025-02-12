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

export const OnTest: Story = {
  args: {}
};
