import { style } from "@vanilla-extract/css";
import { text } from "../../styles/style.css";

export const calendar = style({
  padding: "2rem",
  textAlign: "center",
});

export const calendarMonthGrid = style({
  selectors: {
    [`${calendar} &`]: {
      display: "flex",
      flexWrap: "wrap",
    },
  },
});

export const calendarWeekdayGrid = style([
  text.sm,
  text.secondary,
  {
    selectors: {
      [`${calendar} &`]: {
        display: "flex",
        padding: "1rem 0 0 0",
      },
    },
  },
]);

export const calendarTile = style([
  {
    flex: "0 0 14.2857%",
    overflow: "hidden",
    maxWidth: "100%",
    fontSize: "inherit",
    textAlign: "center",
    boxSizing: "border-box",
    selectors: {
      [`${calendarWeekdayGrid} &`]: {},
      [`${calendarMonthGrid} &`]: {
        flex: "0 0 14.2857%",
        padding: ".75rem 0",
        background: "none",
      },
      [`${calendar} &.selected`]: {
        background: "blue",
      },
      [`${calendar} &:nth-child(7n)`]: {
        color: "#77aaff",
      },
      [`${calendar} &:nth-child(7n+1)`]: {
        color: "#f27878",
      },
    },
  },
]);

export const calendarDate = style({
  selectors: {
    [`${calendar} &`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 16,
      height: 16,
      borderRadius: 16,
      lineHeight: 1,
      padding: 8,
      margin: "0 auto",
    },
    [`${calendar} &.selected`]: {
      background: "#77aaff",
      color: "#fff",
    },
  },
});
