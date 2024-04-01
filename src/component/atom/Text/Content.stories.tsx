import { StoryFn } from "@storybook/react";
import Text, { TextProps } from "./index";

export default {
  title: "Text",
  component: Text,
};

const Template: StoryFn<TextProps> = (args: any) => <Text {...args} />;

export const MainPageTitle = Template.bind({});

MainPageTitle.args = {
  texttype: "MainPageTitle",
  children: "메인 페이지 헤더",
};

export const DetailPageTitle = Template.bind({});

DetailPageTitle.args = {
  texttype: "DetailPageTitle",
  children: "디테일 페이지 헤더",
};

export const ContentTitle = Template.bind({});

ContentTitle.args = {
  texttype: "ContentTitle",
  children: "콘텐츠 헤더",
};
