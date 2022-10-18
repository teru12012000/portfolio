import { flexbox } from "@mui/system";
import { style } from "@vanilla-extract/css";

const run={
  img:style({
    margin:"auto",
    position:"relative",
    width:"200px",
    height:"200px",
  }),
  img2:style({
    borderRadius:"50%",
  }),
  li:style({
    listStyle:"none",
    fontSize:"20px",
  }),
  content:style({
    margin:"30px auto",
  }),
  pass:style({
    fontSize:"18px",
  }),
  span:style({
    color:"blue"
  })
};

export default run;