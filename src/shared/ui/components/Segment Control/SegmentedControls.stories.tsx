import type { StoryObj } from '@storybook/react';
import SegmentedControls from './SegmentedControls';

const meta = {
  component: SegmentedControls,
  title: 'Segment Controls/SegmentedControls',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {}
};
