import { style } from "@vanilla-extract/css";

const head = {
  container: style({
    position: "fixed",
    top: "0",
    width: "100vw",
  }),
  header: style({
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    width: "100%",
    height: 80,
    "@media": {
      "screen and (min-width:540px)": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
    },
  }),
  hamlist: style({
    zIndex: 500,
    paddingTop: "20px",
    width: "20%",
    "@media": {
      "screen and (max-width:500px)": {
        width: "100%",
      },
    },
  }),
  hamul: style({
    overflow: "auto",
    zIndex: "200px",
    backgroundColor: "white",
    "::-webkit-scrollbar": {
      display: "none",
    },
  }),

  list: style({
    color: "white",
    display: "inline-block",
    textAlign: "center",
    marginRight: 30,
  }),
  icon: style({
    color: "white",
    ":hover": {
      color: "aqua",
      transition: "0.4s",
    },
  }),
};

export default head;
