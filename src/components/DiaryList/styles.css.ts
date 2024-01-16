import { style } from "@vanilla-extract/css";
import {
  flexContainer,
  gap,
  border,
  shadow,
  rounded,
  text,
} from "../../styles/style.css";

export const dirayListContainer = style([
  flexContainer.column,
  gap.md,
  {
    alignItems: "center",
    maxWidth: "576px",
    margin: "0 auto",
    padding: "2rem 0",
  },
]);

export const filterBar = style([
  flexContainer.row,
  {
    justifyContent: "space-between",
    padding: "1rem 2rem 0 2rem",
  },
]);

export const diaryItem = style([
  shadow,
  border,
  flexContainer.column,
  gap.md,
  text.sm,
  rounded.l,
  text.base,
  text.primary,
  {
    cursor: "pointer",
    width: "100%",
    padding: "1rem",
    borderWidth: "1px",
  },
]);
