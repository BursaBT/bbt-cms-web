import { Meta, StoryObj } from '@storybook/react';
import Maintenance from '.';

const meta: Meta<typeof Maintenance> = {
  title: 'Catalog/Extra Pages/Maintenance',
  component: Maintenance
};

export default meta;

type Story = StoryObj<typeof Maintenance>;
export const Page: Story = {
  args: {}
};
