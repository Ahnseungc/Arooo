import { StoryFn } from "@storybook/react";
import MainPage from "./index";

export default {
  title: "MainPage",
  component: MainPage,
};

const Template: StoryFn<any> = (args: any) => <MainPage {...args} />;

export const MainPageOrganisms = Template.bind({});

MainPageOrganisms.args = {
  //   TextType: "Like",
};
