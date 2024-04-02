import { StoryFn } from "@storybook/react";
import Like, { LikeProps } from "./index";

export default {
  title: "Like",
  component: Like,
};

const Template: StoryFn<LikeProps> = (args: any) => <Like {...args} />;

export const LikeMolecules = Template.bind({});

LikeMolecules.args = {
  texttype: "Like",
  likes: 3,
};
