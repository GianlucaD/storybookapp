// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import MyButton from "../components/MyButton";

export default {
  title: "Button",
  component: MyButton,
} as ComponentMeta<typeof MyButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof MyButton> = (args) => (
  <MyButton {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  text: "MyText",
};
