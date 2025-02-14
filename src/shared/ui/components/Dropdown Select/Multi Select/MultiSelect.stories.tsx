import type { StoryObj } from '@storybook/react';
import MultiSelect from './MultiSelect';

const meta = {
  component: MultiSelect,
  title: 'Dropdown/MultiSelect',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {elements: ['Первый вариант', 'Второй вариант', 'Третий вариант', 'Четвертый вариант', 'Пятый вариант'],}
}
