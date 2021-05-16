import { Meta, Story } from '@storybook/react';
import { VideoGrid, VideoGridProps } from '../components/base/VideoGrid';
import { SampleUsers } from '../samples/samples';

export default {
  title: "Base/VideoGrid",
  component: VideoGrid,
  argTypes: {},
} as Meta;

const Template: Story<VideoGridProps> = (args) => <VideoGrid {...args} />;

export const Default = Template.bind({});
Default.args = {
  users: SampleUsers
};
