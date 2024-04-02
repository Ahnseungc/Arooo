import { StoryFn } from "@storybook/react";
import ContentBox from "./index";

export default {
  title: "ContentBox",
  component: ContentBox,
};

const Template: StoryFn<any> = (args: any) => <ContentBox {...args} />;

export const ContentBoxOrganisms = Template.bind({});

ContentBoxOrganisms.args = {
  title: "테스트",
  likes: 1,
  id: "테스트아이디",
};
