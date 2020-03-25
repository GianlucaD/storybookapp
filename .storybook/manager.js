import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import { create } from "@storybook/theming";


// test me
addons.setConfig({
    theme: create({
        base: "dark",
        brandTitle: "My Storybook",
        brandImage: "logo192.png"
    }),
    backgrounds: [
        { name: "white", value: "#fff" },
        { name: "ligh grey", value: "#CDCDCD" },
        { name: "grey", value: "#888" },
        { name: "dark grey", value: "#2f2f2f" },
        { name: "black", value: "#000" },
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
        { name: "noser", value: "#3b76d9" }
    ]
});

