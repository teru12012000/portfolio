import { style } from "@vanilla-extract/css";
const skils={
  content:style({
    margin:"50px auto auto auto",
    border:"2px solid black",
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
    height:"200px",
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
  })
}
export default skils;