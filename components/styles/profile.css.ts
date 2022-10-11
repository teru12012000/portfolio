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
    listStyle:"none",
  }),
  span:style({
    color:"red",
  }),
  ul:style({
    padding:"0"
  }),
  link:style({  
    backgroundColor:"yellow",
    color:"red",
    fontSize:"20px",
    ':hover':{
      backgroundColor:"black",
      transition:"0.4s",
    }
  }),
  content1:style({
    width:"100%",
    textAlign:"center",
    margin:"10px auto",
   
  })
}

export default intro;