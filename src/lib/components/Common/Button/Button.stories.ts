import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';
import { mistVariables } from '$src/lib/theme/variables';
const props = mistVariables.base;

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color:    { control: { type: 'select' }, options: props.allColors },
    variant:  { control: { type: 'select' }, options: props.const.variants.types },
    size:     { control: { type: 'select' }, options: props.const.sizes },
    border:  { control: { type: 'select' }, options: props.const.borders },
    shadow:   { control: { type: 'select' }, options: props.const.shadows },
  },
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    color: 'primary',
    variant: 'fill',
    size: 'md',
    border: 'tile',
    shadow: 'bevel',
  },
};

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };
