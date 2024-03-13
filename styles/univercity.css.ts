import { style } from "@vanilla-extract/css";

const univerce = {
  content: style({
    width: "500px",
    textAlign: "center",
    margin: "250px auto",
    "@media": {
      "screen and (max-width:500px)": {
        width: "60%",
      },
    },
  }),
  box: style({
    marginTop: "30px",
    borderBottom: "2px solid gray",
  }),
  h2: style({
    textAlign: "left",
  }),
  sub: style({
    width: "400px",
    border: "2px solid gray",
    margin: "auto",
    marginBottom: "10px",
    "@media": {
      "screen and (max-width:500px)": {
        width: "100%",
      },
    },
  }),
  li: style({
    listStyle: "none",
    margin: "5px",
  }),
  ul: style({
    padding: "0",
  }),
};

export default univerce;
