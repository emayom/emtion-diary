import { style } from "@vanilla-extract/css";
import { border, flexContainer } from "../../styles/style.css";

export const emotionItem = style([
  flexContainer.row,
  border,
  {
    alignItems: "center",
    justifyContent: "center",
    filter: "grayScale(1)",
    padding: ".25rem",
    borderRadius: "50%",

    ":hover": {
      filter: "none",
    },
    selectors: {
      "&.selected": {
        filter: "none",
        backgroundColor: "#f2f4f6",
      },
    },
  },
]);
