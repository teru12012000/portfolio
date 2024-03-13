import { style } from "@vanilla-extract/css";

const run = {
  img: style({
    margin: "auto",
    position: "relative",
    zIndex: "-10",
    width: "200px",
    height: "200px",
  }),
  img2: style({
    borderRadius: "50%",
  }),
  li: style({
    listStyle: "none",
    fontSize: "20px",
  }),
  content: style({
    margin: "30px auto",
  }),
  pass: style({
    fontSize: "18px",
    width: "300px",
    margin: "auto",
    "@media": {
      "screen and (max-width:400px)": {
        width: "90%",
      },
    },
  }),
  span: style({
    color: "blue",
  }),
  ol: style({
    padding: "0",
  }),
};

export default run;
