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
    marginTop:"30px",
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

  }),
  icon:style({
    ':hover':{
      fontSize:"50px",
      transition:"0.4s"
    }
  }),
  pass:style({
    margin:"0",
    fontSize:"20px"
  }),
  box:style({
    border:"2px solid gray",
    width:"300px",
    margin:"auto",
    borderRadius:"10%",
    marginBottom:"20px",
  }),
  title:style({
   marginTop:"-19px",
   width:"180px",
   marginLeft:"8px",
   backgroundColor:"yellow",
   color:"red"
   
  }),
  title2:style({
   marginTop:"-19px",
   width:"100px",
   backgroundColor:"yellow",
   color:"red",
   marginLeft:"8px",
  })
};

export default home;