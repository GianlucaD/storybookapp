import { configure, addParameters } from "@storybook/react";
import '@storybook/addon-console';

addParameters({
  backgrounds: [
    { name: "white", value: "#fff" },
    { name: "ligh grey", value: "#CDCDCD" },
    { name: "grey", value: "#888" },
    { name: "dark grey", value: "#2f2f2f" },
    { name: "black", value: "#000" },
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
    {name: "noser", value:"#3b76d9"}
  ]
});

// automatically import all files ending in *.stories.js
// configure(require.context("../src/", true, /\.story\.js$/), module);
