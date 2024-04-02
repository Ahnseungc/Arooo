import { StoryFn } from "@storybook/react";
import Button, { ButtonProps } from "./index";

export default {
  title: "Button",
  component: Button,
};

const Template: StoryFn<ButtonProps> = (args: any) => <Button {...args} />;

export const Like = Template.bind({});
Like.args = {
  buttontype: "Like",
  children: "",
};

export const Next = Template.bind({});
Next.args = {
  buttontype: "Next",
  children: "",
};
