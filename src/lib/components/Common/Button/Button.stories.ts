import type { Meta, StoryObj } from '@storybook/svelte';

import Button from './Button.svelte';
import { mistThemeProperties as props } from '$src/lib/theme/constants/properties';

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    color:    { control: { type: 'select' }, options: props.box.colorsDerived },
    variant:  { control: { type: 'select' }, options: props.box.variants },
    size:     { control: { type: 'select' }, options: props.box.sizes },
    rounded:  { control: { type: 'select' }, options: props.box.borders },
    shadow:   { control: { type: 'select' }, options: props.box.shadows },
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
    rounded: 'tile',
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
