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
  hamlist:style({
    zIndex:"500px",
    paddingTop:"20px",
    width:"20%", 
    '@media':{
      'screen and (max-width:500px)':{
        width:"100%",
      }
    },
  }),
  hamul:style({
    overflow:"auto",
    zIndex:"200px",
    backgroundColor:"white",
    '::-webkit-scrollbar':{
      display:"none",
    }
  }),



  list:style({
    color:"white",
    display:"inline-block",
    textAlign:"center",
    marginTop:"20px",
    marginLeft:"10px",
  }),
  icon:style({
    color:"white",
    ':hover':{
      color:"aqua",
      transition:"0.4s"
    },
  }),
};

export default head;