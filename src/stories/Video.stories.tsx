import { Meta, Story } from '@storybook/react';
import { Video, VideoProps } from '../components/base/Video';

export default {
  title: 'Base/Video',
  component: Video,
  argTypes: {},
} as Meta;

const Template: Story<VideoProps> = (args) => <Video {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'Victor Hugo',
  active: true,
  muted: true,
  image: './dev/video_poster_person_3.jpeg'
};

