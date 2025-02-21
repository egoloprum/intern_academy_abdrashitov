import type { StoryObj } from '@storybook/react';
import FileDropzone from './FileDropzone';

const meta = {
  component: FileDropzone,
  title: 'File Upload/FileDropzone',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
}

export default meta
type Story = StoryObj<typeof meta>

export const OnTest: Story = {
  args: {}
}

export const OnError: Story = {
  args: {
    error: true
  }
}

export const OnDisabled: Story = {
  args: {
    disabled: true
  }
}
