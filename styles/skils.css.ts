import { style } from "@vanilla-extract/css";
const skils={
  content:style({
    margin:"250px auto auto auto",
    textAlign:"center",
    width:"100%"
  }),
  box:style({
    border:"2px solid gray",
    boxSizing:"border-box",
    width:"400px",
    margin:"30px auto",
    '@media':{
      'screen and (max-width:500px)':{
        width:"60%",
      },
    }
  }),
  img:style({
    position:'relative',
    zIndex:"-10",
    width:"100px",
    height:"100px",
    textAlign:"center",
    display:"inline-block",
    
    '@media':{
      'screen and (max-width:400px)':{
        margin:"10px",
      },
    }
  }),
  modal:style({
    margin:"50px auto",
    marginBottom:"0",
    textAlign:"center",
  }),
  tskil:style({
    height:"60px",
    width:"80px",
  }),
  tstart:style({
    height:"60px",
    width:"60px",
  }),
  table:style({
    borderCollapse:"collapse",
  }),
  btn1:style({
    marginTop:"10px",
    backgroundColor:"yellow",
    color:"red",
    borderRadius:"30%",
    cursor:"pointer",
  }),
  head:style({
    backgroundColor:"black",
    color:"white",
    fontWeight:"bold"

  }),
  body:style({
    backgroundColor:"gray",
    color:"white",
    fontWeight:"bold",
    border:"1px solid white"
  }),
  link:style({
    backgroundColor:"yellow",
    color:"red",
    ':hover':{
      backgroundColor:"black",
      transition:"0.4s",
    }
  }),
  li:style({
    margin:"10px auto",
  })
}
export default skils;