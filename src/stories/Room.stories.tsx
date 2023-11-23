import { ThemeProvider } from 'styled-components';
import { Meta, Story } from '@storybook/react';
import { Room, RoomProps } from '../components/base/Room';
import { SampleUsers } from '../samples/samples';
import { theme } from '../styled/lib/styled.themes';

export default {
  title: 'Base/Room',
  component: Room,
  argTypes: {},
} as Meta;

const Template: Story<RoomProps> = (args) => <ThemeProvider theme={theme}><Room {...args} /></ThemeProvider>;

export const Default = Template.bind({});
Default.args = {
  name: 'Birthday Party',
  users: SampleUsers
};

