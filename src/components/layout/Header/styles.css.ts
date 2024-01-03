import { style } from "@vanilla-extract/css";
import { border } from "../../../styles/style.css";

export const header = style([
  border,
  {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: "1px",
    padding: "1rem 2rem",
  },
]);
