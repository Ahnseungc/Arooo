import { StoryFn } from "@storybook/react";
import MainPageHeader from "./index";

export default {
  title: "MainPageHeader",
  component: MainPageHeader,
};

const Template: StoryFn<any> = (args: any) => <MainPageHeader {...args} />;

export const MainPageHeaderOrganisms = Template.bind({});

MainPageHeaderOrganisms.args = {
  //   TextType: "Like",
};
