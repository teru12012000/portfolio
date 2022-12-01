import { style } from "@vanilla-extract/css";
const intro={
  content:style({
    margin:"250px auto",
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
    fontSize:"40px",
    margin:"50px",
    '@media':{
      'screen and (max-width:700px)':{
        fontSize:"30px"
      },
    }
  }),
  passage:style({
    width:"400px",
    fontSize:"15px",
    margin:"auto",
    '@media':{
      'screen and (max-width:500px)':{
        width:"60%"
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
    borderBottom:"2px solid gray",
    margin:"auto",
    marginTop:"20px",
    boxSizing:"border-box",
    '@media':{
      'screen and (max-width:400px)':{
        width:"90%"
      },
    }
  }),
  content1:style({
    width:"50px",
    textAlign:"center",
    marginLeft:"0",
    marginTop:"10px",

  }),
  pass:style({
    marginBottom:"10px",
  }),
}

export default intro;