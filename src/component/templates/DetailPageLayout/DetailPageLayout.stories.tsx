import { StoryFn } from "@storybook/react";
import DetailPage from "./index";

export default {
  title: "DetailPage",
  component: DetailPage,
};

const Template: StoryFn<any> = (args: any) => <DetailPage {...args} />;

export const DetailPageOrganisms = Template.bind({});

DetailPageOrganisms.args = {
  //   TextType: "Like",
};
