import { style } from "@vanilla-extract/css";
import { border, shadow, rounded, text } from "../../styles/style.css";

export const diaryItem = style([
  shadow,
  border,
  rounded.l,
  text.base,
  text.secondary,
  {
    width: "25%",
    padding: "1rem",
    borderWidth: "1px",
  },
]);
