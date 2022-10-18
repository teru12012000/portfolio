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
    margin:"50px",
    '@media':{
      'screen and (max-width:700px)':{
        fontSize:"30px"
      },
    }
  }),
  passage:style({
    width:"700px",
    fontSize:"15px",
    margin:"auto",
    '@media':{
      'screen and (max-width:700px)':{
        width:"100%"
      },
    }
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
  }),
  box:style({
    alignItems:"center",
    width:"400px",
    height:"250px",
    border:"2px solid gray",
    margin:"auto",
    marginTop:"20px",
    boxSizing:"border-box",
    '@media':{
      'screen and (max-width:400px)':{
        width:"100%"
      },
    }
  }),
  content1:style({
    width:"50px",
    textAlign:"center",
    marginLeft:"30px",

  }),
  pass:style({
    height:"80px",
    margin:"0",
  }),
}

export default intro;