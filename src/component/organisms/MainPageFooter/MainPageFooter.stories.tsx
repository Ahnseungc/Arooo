import { StoryFn } from "@storybook/react";
import { FooterProps, MainPageFooter } from "./index";

export default {
  title: "MainPageFooter",
  component: MainPageFooter,
};

const Template: StoryFn<FooterProps> = (args: any) => (
  <MainPageFooter {...args} />
);

export const MainPageFooterOrganisms = Template.bind({});

MainPageFooterOrganisms.args = {
  //   TextType: "Like",
};
