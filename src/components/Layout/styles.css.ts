import { style } from "@vanilla-extract/css";
import { flexContainer, gap } from "../../styles/style.css";

export const layout = style({
  padding: "2rem",
});

export const dirayListContainer = style([
  flexContainer.column,
  gap.md,
  {
    alignItems: "center",
    maxWidth: "576px",
    margin: "0 auto",
    padding: "2rem",
  },
]);

export const layoutHeader = style([
  flexContainer.row,
  {
    justifyContent: "space-between",
  },
]);
