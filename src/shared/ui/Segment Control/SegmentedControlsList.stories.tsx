import type { StoryObj } from '@storybook/react';
import SegmentedControlsList from './SegmentedContolsList';

const meta = {
  component: SegmentedControlsList,
  title: 'Segment Controls/SegmentedControls',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const On5Element: Story = {
  args: {
    size: "medium",
    elements: ["Вариант", "Вариант", "Вариант", "Вариант", "Вариант"]
  },
}
export const On4Element: Story = {
  args: {
    size: "medium",
    elements: ["Вариант", "Вариант", "Вариант", "Вариант"]
  },
}
export const On3Element: Story = {
  args: {
    size: "medium",
    elements: ["Вариант", "Вариант", "Вариант"]
  },
}
export const On2Element: Story = {
  args: {
    size: "medium",
    elements: ["Вариант", "Вариант"]
  },
}
