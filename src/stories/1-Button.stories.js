import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { withKnobs, text } from "@storybook/addon-knobs";
import { withA11y } from "@storybook/addon-a11y";

export default {
  title: 'Button',
  component: Button,
  decorators: [withKnobs, withA11y]
};

export const Text = () => <Button onClick={action('clicked on text')}>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked on Emoji')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
export const withknobs = () => (
  <Button onClick={action('clicked')}>{text("Bitte Text eingeben", "hier Text")}</Button>
);
