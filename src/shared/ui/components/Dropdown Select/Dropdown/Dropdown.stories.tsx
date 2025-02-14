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

export const OnDefault: Story = {
  args: {
    elements: ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвертый вариант', 'Пятый вариант', 'Шестой вариант'],
  }
}

export const OnDisabled: Story = {
  args: {
    isDisabled: true
  }
}
