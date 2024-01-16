import { style } from "@vanilla-extract/css";
import { border, flexContainer } from "../../styles/style.css";

export const header = style([
  border,
  flexContainer.row,
  {
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    padding: "1rem 0",
  },
]);

export const headerBtn = style({
  flex: "1 0 0",
  selectors: {
    [`${header} &:first-child`]: { textAlign: "left" },
    [`${header} &:last-child`]: { textAlign: "right" },
  },
});

export const headerText = style({
  flex: "2 1 0",
  textAlign: "center",
});
