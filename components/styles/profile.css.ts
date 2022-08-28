import { style } from "@vanilla-extract/css";
const intro={
  content:style({
    margin:"50px auto auto auto",
    height:"420px",
    display:"inline-block",
    border:"2px solid gray",
    
    '@media':{
      'screen and (min-width:281px)':{
        display:"flex",
        justifyContent:"center",
      },
      'screen and (max-width:280px)':{
        height:"820px"
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
    'screen and (max-width:414px)':{
      width:"45%",
      height:"400px",
    },
    'screen and (max-width:280px)':{
      width:"100%",
      height:"200px",
      margin:"auto"
    }
   }
  }),
  h2:style({
    textAlign:"center",
  }),
  passage:style({
    textAlign:"center",
    overflow:"auto",
    height:"430px",
    width:"400px",
    whiteSpace: "nowrap",
    boxSizing:"border-box",
    '@media':{
      'screen and (max-width:540px)':{
        height:"600px",
      },
      'screen and (max-width:414px)':{
        width:"276px",
        height:"400px",
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

export default intro;