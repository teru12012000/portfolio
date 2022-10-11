import { flexbox } from "@mui/system";
import { style } from "@vanilla-extract/css";

const home={
  first:style({
    margin:"50px auto",
    textAlign:'center',
  }),
  content:style({
    margin:"20px auto",
    width:"100%",
    textAlign:"center",
  }),
  link:style({
    backgroundColor:"yellow",
    color:"red",
    fontSize:"20px",
    ':hover':{
      backgroundColor:"black",
      transition:"0.4s"
    }
  }),
  img:style({
    margin:"auto",
    
    position:"relative",
    width:"100px",
    height:"100px",
  }),
  img2:style({
    borderRadius:"50%",
  }),
  li:style({
    listStyle:"none",
    margin:"10px"
  }),
  p:style({
    fontSize:"13px",
    textAlign:"center",
    width:"200px",
    margin:'15px auto',

  })
};

export default home;