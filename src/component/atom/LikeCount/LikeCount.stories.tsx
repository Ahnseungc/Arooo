import { StoryFn } from "@storybook/react";
import LikeCount, { LikeCountProps } from "./index";

export default {
  title: "LikeCount",
  component: Text,
};

const Template: StoryFn<LikeCountProps> = (args: any) => (
  <LikeCount {...args} />
);

export const MainPageTitle = Template.bind({});

MainPageTitle.args = {
  TextType: "LikeCount",
  children: "좋아요 수",
};
