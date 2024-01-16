import { style, styleVariants } from "@vanilla-extract/css";

export const shadow = style({
  boxShadow:
    "0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1)",
});

export const highlight = style({
  boxShadow: "inset 0 -8px 0 #c5e2ff",
});

export const border = style({
  border: "0 solid #e5e7eb",
});

export const flexContainer = styleVariants({
  row: {
    display: "flex",
    flexDirection: "row",
  },
  column: {
    display: "flex",
    flexDirection: "column",
  },
});

export const flexWrap = style([
  flexContainer.row,
  {
    flexWrap: "wrap",
  },
]);

export const reset = style({
  margin: 0,
  padding: 0,
  border: "none",
  outline: "none",
});

export const text = styleVariants({
  primary: {
    color: "#030712",
  },
  secondary: {
    color: "#64748b",
  },

  xs: {
    fontSize: ".75rem",
    lineHeight: "1rem",
  },
  sm: {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
  },
  base: {
    fontSize: "1rem",
    lineHeight: "1.5rem",
  },
  lg: {
    fontSize: "1.25rem",
    lineHeight: "1.5rem",
  },
});

export const font = styleVariants({
  thin: {
    fontWeight: "100",
  },
  extralight: {
    fontWeight: "200",
  },
  light: {
    fontWeight: "300",
  },
  normal: {
    fontWeight: "400",
  },
  medium: {
    fontWeight: "500",
  },
  semibold: {
    fontWeight: "600",
  },
  bold: {
    fontWeight: "600",
  },
});

export const rounded = styleVariants({
  l: {
    borderRadius: ".5rem",
  },
  xl: {
    borderRadius: ".75rem",
  },
});

export const gap = styleVariants({
  xs: { gap: ".25rem" },
  sm: { gap: ".5rem" },
  md: { gap: "1rem" },
});

export const background = styleVariants({
  primary: { backgroundColor: "" },
  secondary: { backgroundColor: "#f5f6f8" },
  accent: { backgroundColor: "#3c82f6" },
});
