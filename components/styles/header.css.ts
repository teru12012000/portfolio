import { style } from "@vanilla-extract/css";

const head={
  header:style({
    textAlign:"center",
    backgroundColor:"black",
    color:"white",
    padding:"5px",
    '@media':{
      'screen and (min-width:540px)':{
        display:"flex",
        justifyContent:"space-between",
      }
    }
    
  }),
  list:style({
    display:"inline-block",
    textAlign:"center",
    marginTop:"20px",
    marginLeft:"10px",
  }),
  icon:style({
    ':hover':{
      color:"aqua",
      transition:"0.4s"
    },
  }),
};

export default head;