import { StoryFn } from "@storybook/react";
import MainPageFooter from "./index";

export default {
  title: "MainPageFooter",
  component: MainPageFooter,
};

const Template: StoryFn<any> = (args: any) => <MainPageFooter {...args} />;

export const MainPageFooterOrganisms = Template.bind({});

MainPageFooterOrganisms.args = {
  //   TextType: "Like",
};
