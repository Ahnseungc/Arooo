import { StoryFn } from "@storybook/react";
import ContentDetailBox from "./index";

export default {
  title: "ContentBox",
  component: ContentDetailBox,
};

const Template: StoryFn<any> = (args: any) => <ContentDetailBox {...args} />;

export const ContentDetailBoxOrganisms = Template.bind({});

ContentDetailBoxOrganisms.args = {
  texttype: "Like",
  title: "타이틀",
  likes: 3,
  content: "콘텐츠",
  id: "1",
};
