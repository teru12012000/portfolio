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
    },
    '@media':{
      'screen and (min-width:900px)':{
        fontSize:"25px",
      }
    },
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
    margin:"10px",
    '@media':{
      'screen and (min-width:900px)':{
        margin:"20px",
    
      }
    },
  }),
  p:style({
    fontSize:"13px",
    textAlign:"center",
    width:"200px",
    margin:'15px auto',
    '@media':{
      'screen and (min-width:900px)':{
        width:"300px",
        fontSize:"20px",
    

      },
    }

  })
};

export default home;