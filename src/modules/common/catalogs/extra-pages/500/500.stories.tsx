import { Meta, StoryObj } from '@storybook/react';
import Status500 from '.';

const meta: Meta<typeof Status500> = {
  title: 'Catalog/Extra Pages/500',
  component: Status500
};

export default meta;

type Story = StoryObj<typeof Status500>;
export const Page: Story = {
  args: {}
};
