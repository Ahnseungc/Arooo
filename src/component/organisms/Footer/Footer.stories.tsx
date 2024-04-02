import { StoryFn } from "@storybook/react";
import { FooterProps } from "./index";
import Footer from "./index";

export default {
  title: "Footer",
  component: Footer,
};

const Template: StoryFn<FooterProps> = (args: any) => <Footer {...args} />;

export const FooterOrganisms = Template.bind({});

FooterOrganisms.args = {
  //   TextType: "Like",
};
