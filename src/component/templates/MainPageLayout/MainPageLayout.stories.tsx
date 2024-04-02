import { StoryFn } from "@storybook/react";
import MainPage from "./index";

export default {
  title: "MainPage",
  component: MainPage,
};

const Template: StoryFn<any> = (args: any) => <MainPage {...args} />;

export const MainPageOrganisms = Template.bind({});

MainPageOrganisms.args = {
  contents: {
    scrollrRef: null,
    targetRef: null,
    data: [
      [
        {
          title: "테스트",
          likes: 1,
          id: "123",
        },
        {
          title: "테스트",
          likes: 8,
          id: "1236",
        },
        {
          title: "테스트",
          likes: 2,
          id: "12344",
        },
        {
          title: "테스트",
          likes: 1,
          id: "1233",
        },
      ],
      [
        {
          title: "테스트",
          likes: 1,
          id: "123",
        },
        {
          title: "테스트",
          likes: 8,
          id: "1236",
        },
        {
          title: "테스트",
          likes: 2,
          id: "12344",
        },
        {
          title: "테스트",
          likes: 1,
          id: "1233",
        },
      ],
      [
        {
          title: "테스트",
          likes: 1,
          id: "123",
        },
        {
          title: "테스트",
          likes: 8,
          id: "1236",
        },
        {
          title: "테스트",
          likes: 2,
          id: "12344",
        },
        {
          title: "테스트",
          likes: 1,
          id: "1233",
        },
      ],
    ],
  },
};
