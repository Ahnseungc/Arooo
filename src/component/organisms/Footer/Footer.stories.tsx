import { StoryFn } from "@storybook/react";
import { FooterProps } from "./index";
import Footer from "./index";

export default {
  title: "MainPageFooter",
  component: Footer,
};

const Template: StoryFn<FooterProps> = (args: any) => <Footer {...args} />;

export const MainPageFooterOrganisms = Template.bind({});

MainPageFooterOrganisms.args = {
  //   TextType: "Like",
};
