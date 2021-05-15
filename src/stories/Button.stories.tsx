import { ReactChild, ReactElement } from 'react';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { TiGroupOutline } from 'react-icons/ti';
import { Meta, Story } from '@storybook/react';
import { Button } from '../components/base/Button';

export default {
  title: 'Base/Button',
  component: Button,
  argTypes: {},
} as Meta;

const Template: Story<{icon: ReactElement, variant: "primary" | "secondary" | "stop";  size: "small" | "large", onClick: () => void, children: ReactChild}> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: <BsFillChatDotsFill/>,
  variant: "primary",
  children: "chat"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  children: "chat"
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: "chat"
};

export const Small = Template.bind({});
Small.args = {
  icon: <TiGroupOutline/>,
  size: 'small',
  variant: "secondary",
  children: "group"
};

export const Stop = Template.bind({});
Stop.args = {
  size: 'large',
  variant: "stop",
  children: "end call"
};
