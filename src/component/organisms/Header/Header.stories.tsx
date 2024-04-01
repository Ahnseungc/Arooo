import { StoryFn } from "@storybook/react";
import Header from "./index";

export default {
  title: "MainPageHeader",
  component: Header,
};

const Template: StoryFn<any> = (args: any) => <Header {...args} />;

export const MainPageFooterOrganisms = Template.bind({});

MainPageFooterOrganisms.args = {
  //   TextType: "Like",
};
