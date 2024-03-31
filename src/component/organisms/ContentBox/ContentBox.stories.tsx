import { StoryFn } from "@storybook/react";
import ContentBox from "./index";

export default {
  title: "ContentBox",
  component: ContentBox,
};

const Template: StoryFn<any> = (args: any) => <ContentBox {...args} />;

export const ContentBoxOrganisms = Template.bind({});

ContentBoxOrganisms.args = {
  //   TextType: "Like",
};
