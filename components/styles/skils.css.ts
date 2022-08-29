import { style } from "@vanilla-extract/css";
const skils={
  content:style({
    margin:"50px auto auto auto",
    border:"2px solid gray",
    height:"550px",
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
    height:"400px",
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
    margin:"auto",
    textAlign:"center",
    '@media':{
      'screen and (max-height:1000px)':{
        height:"500px",
        overflow:"auto",
      }
    }
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
  btn:style({
    marginTop:"10px",
   backgroundColor:"yellow",
   color:"red",
   borderRadius:"30%"
  }),
  btn1:style({
    marginTop:"10px",
    backgroundColor:"yellow",
    color:"red",
    borderRadius:"30%"
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
}
export default skils;