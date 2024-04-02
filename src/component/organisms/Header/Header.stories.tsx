import { StoryFn } from "@storybook/react";
import Header from "./index";

export default {
  title: "Header",
  component: Header,
};

const Template: StoryFn<any> = (args: any) => <Header {...args} />;

export const HeaderOrganisms = Template.bind({});

HeaderOrganisms.args = {};
