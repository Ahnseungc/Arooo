import { StoryFn } from "@storybook/react";
import MainPage from "./index";

export default {
  title: "MainPage",
  component: MainPage,
};

const Template: StoryFn<any> = (args: any) => <MainPage {...args} />;

export const MainPageOrganisms = Template.bind({});

MainPageOrganisms.args = {
  data: {
    data: [[{ title: "테스트용", likes: 1, id: "테스트" }]],
    onNext: {},
  },
};
