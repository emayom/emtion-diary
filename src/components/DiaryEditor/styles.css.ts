import { style, globalStyle } from "@vanilla-extract/css";
import {
  shadow,
  border,
  rounded,
  reset,
  text,
  font,
  flexContainer,
  highlight,
  gap,
} from "../../styles/style.css";

export const diaryEditor = style([
  flexContainer.column,
  {
    alignItems: "center",
    gap: "1rem",
    padding: "2rem",
    boxSizing: "border-box",
  },
]);

export const header = style([
  flexContainer.column,
  {
    width: "100%",
    gap: "1rem",
    textAlign: "center",
  },
]);

export const section = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const titleInput = style([
  text.lg,
  text.primary,
  font.bold,
  border,
  {
    width: "100%",
    textAlign: "center",
    fontFamily: "inherit",
    padding: " 0 0 .75rem 0",
    borderBottomWidth: "1px",

    ":focus": {
      outline: "none",
    },
  },
]);

export const textarea = style([
  shadow,
  border,
  rounded.xl,
  text.sm,
  text.secondary,
  {
    width: "100%",
    padding: "1rem",
    resize: "none",
    fontFamily: "inherit",
    borderWidth: "1px",
    boxSizing: "border-box",
    aspectRatio: "1",

    ":focus": {
      outline: "none",
    },
  },
]);

export const datePicker = style([
  flexContainer.row,
  text.lg,
  text.primary,
  font.bold,
  {
    position: "relative",
    width: "100%",
    justifyContent: "center",
    textDecoration: "underline",
  },
]);

export const datePickerInput = style({
  position: "absolute",
  opacity: "0",
});

export const emotionSet = style([
  flexContainer.row,
  shadow,
  border,
  rounded.xl,
  {
    width: "max-content",
    gap: ".5rem",
    justifyContent: "space-around",
    margin: "0 auto",
    padding: "8px",
    borderWidth: "1px",
    boxSizing: "border-box",
  },
]);

export const emotionOption = style([
  flexContainer.row,
  {
    width: "48px",
    height: "48px",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    filter: "grayScale(1)",

    ":hover": {
      backgroundColor: "#e7e8e9",
      borderRadius: "50%",
      filter: "none",
    },
    selectors: {
      [`${emotionSet} &:has(input:checked)`]: {
        backgroundColor: "#e7e8e9",
        borderRadius: "50%",
        filter: "none",
      },
    },
  },
]);

export const buttonWrap = style([
  flexContainer.row,
  gap.md,
  {
    justifyContent: "flex-end",
  },
]);
