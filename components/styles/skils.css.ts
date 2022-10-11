import { style } from "@vanilla-extract/css";
const skils={
  content:style({
    margin:"50px auto auto auto",
    textAlign:"center",
    
    '@media':{
      'screen and (min-width:1000px)':{
        width:"1000px",
      },
      'screen and (max-width:280px)':{
        width:"100%",
      }
    }
  }),
  h2:style({
    //textAlign:"center"
  }),
  box:style({
    border:"2px solid gray",
    //textAlign:"center",
    boxSizing:"border-box",
    overflow:"auto"
  }),
  img:style({
    position:'relative',
    width:"100px",
    height:"100px",
    margin :"30px",
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