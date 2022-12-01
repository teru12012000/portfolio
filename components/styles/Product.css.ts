import { style } from "@vanilla-extract/css";

const production={
  img:style({
    position:"relative",
    zIndex:"-10",
    margin:"auto",
    textAlign:"center",
  }),
  content:style({
    width:"500px",
    margin:"50px auto",
    overflowWrap:"break-word",
    textAlign:"center",
    '@media':{
      'screen and (max-width:500px)':{
        width:"70%",
      }
    }
  }),
  h2:style({
    border:"2px solid gray",
    textAlign:"center",
    marginBottom:"0",
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",
    }
  }),
  box:style({
    border:"2px solid gray",
    margin:"0",
  }),
  photo:style({
    textAlign:"center",
  }),
  h1:style({
    textAlign:"center",
  }),
  p:style({
    textAlign:"center",
  }),
  a:style({
    textAlign:"center",
    
    backgroundColor:"yellow",
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      color:"white",
      transition:"0.6s",
    }
  }),
  link:style({
    marginTop:"30px",
  })
}

export default production;