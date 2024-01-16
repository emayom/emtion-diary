import { style } from "@vanilla-extract/css";
import {
  background,
  border,
  flexContainer,
  rounded,
  shadow,
} from "../../styles/style.css";

export const diaryContainer = style([
  flexContainer.column,
  {
    padding: "1rem 2rem",
    alignItems: "center",
  },
]);

export const dailyEmotion = style([
  background.secondary,
  border,
  rounded.xl,
  {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    borderWidth: "1px",
    aspectRatio: "1",
  },
]);
