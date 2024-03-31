import { StoryFn } from "@storybook/react";
import ContentDetailBox from "./index";

export default {
  title: "ContentBox",
  component: ContentDetailBox,
};

const Template: StoryFn<any> = (args: any) => <ContentDetailBox {...args} />;

export const ContentDetailBoxOrganisms = Template.bind({});

ContentDetailBoxOrganisms.args = {
  //   TextType: "Like",
};
