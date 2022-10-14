import { style } from "@vanilla-extract/css";
const intro={
  content:style({
    margin:"30px auto",
    width:"100%",
  }),
  photo:style({
    margin:"auto",
    height:"300px",
    width:"150px",
    position:"relative",
    '@media':{
    'screen and (max-width:280px)':{
      width:"100%",
    }
   }
  }),
  h2:style({
    textAlign:"center",
    fontSize:"60px",
    margin:"50px"
  }),
  passage:style({
    textAlign:"center",
    width:"100%",
    whiteSpace: "nowrap",
    boxSizing:"border-box",
    fontSize:"15px",
    '@media':{
      'screen and (max-width:414px)':{
        fontSize:"15px",
      },
    }
  }),
  list:style({
    margin:"10px",
    color:"blue",
    fontSize:"25px",
    listStyle:"none",
  }),
  span:style({
    color:"red",
  }),
  ul:style({
    padding:"0"
  }),
  content1:style({
    width:"50px",
    textAlign:"center",
    marginLeft:"100px",

  }),
  icon:style({
    ':hover':{
      fontSize:"50px",
      transition:"0.4s"
    }
  }),
  p:style({
    margin:"0",
    fontSize:"20px",
    textAlign:"center",
  })
}

export default intro;