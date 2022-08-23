import { style } from "@vanilla-extract/css";
export const intro={
  content:style({
    margin:"50px auto auto auto",
    display:"inline-block",
    border:"2px solid black",
    '@media':{
      'screen and (min-width:281px)':{
        display:"flex",
        justifyContent:"center",
      },
      'screen and (min-width:1000px)':{
        width:"1000px",
      }
    }
  }),
  photo:style({
    margin:"0",
    height:"400px",
    width:"200px",
    position:"relative",
    '@media':{
      'screen and (max-width:540px)':{
        height:"600px",
    },
    'screen and (max-width:412px)':{
      width:"45%",
      height:"300px",
    },
    'screen and (max-width:280px)':{
      width:"100%",
      height:"300px",
    }
   }
  }),
  h2:style({
    textAlign:"center",
  }),
  passage:style({
    textAlign:"center",
    overflow:"auto",
    height:"400px",
    width:"400px",
    whiteSpace: "nowrap",
    boxSizing:"border-box",
    '@media':{
      'screen and (max-width:540px)':{
        height:"600px",
      },
      'screen and (max-width:412px)':{
        width:"276px",
        height:"300px",
      },
    }
  }),
  list:style({
    margin:"10px",
    color:"blue",
    listStyle:"none",
  }),
  span:style({
    color:"red",
  }),
  ul:style({
    padding:"0"
  })
}