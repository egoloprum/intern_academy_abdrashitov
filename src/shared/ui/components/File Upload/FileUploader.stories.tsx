import type { StoryObj } from '@storybook/react';
import FileUploader from './FileUploader';

const meta = {
  component: FileUploader,
  title: 'File Upload/FileUploader',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {}
};
