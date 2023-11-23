import {GlobalStyle} from "../src/styled/lib/styled.globals"
import "destyle.css"
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Poppins:300,400,500,600,700", "sans-serif"],
  },
});

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
