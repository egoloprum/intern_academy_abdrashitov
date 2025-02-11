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
};
