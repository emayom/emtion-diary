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
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        padding: "1rem 0 0 0",
      },
    },
  },
]);

export const calendarTile = style([
  {
    selectors: {
      [`${calendar} &`]: {
        flex: "0 0 14.2857%",
        overflow: "hidden",
        textAlign: "center",
        maxWidth: "100%",
        padding: "0.5rem",
        boxSizing: "border-box",
        background: "none",
        fontSize: "inherit",
        aspectRatio: "1 / 1",
      },
      [`${calendar} &.selected`]: {
        background: "blue",
      },
      [`${calendar} &:nth-child(7n)`]: {
        color: "#f27878",
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
      display: "block",
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
