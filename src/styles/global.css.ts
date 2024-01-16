import { globalStyle } from "@vanilla-extract/css";

globalStyle("html, body", {
  backgroundColor: "#f5f6f8",
});

globalStyle("#root", {
  maxWidth: "576px",
  minHeight: "100vh",
  margin: "0 auto",
  backgroundColor: "#fff",
  fontFamily: "'Hahmlet', serif;",
});
