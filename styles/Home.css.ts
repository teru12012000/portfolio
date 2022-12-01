import { flexbox } from "@mui/system";
import { style } from "@vanilla-extract/css";

const home={
  first:style({
    margin:"200px auto",
    width:"300px",
    marginBottom:"30px",
    textAlign:'center',
    '@media':{
      'screen and (max-width:300px)':{
        width:"70%",
      }
    }
  }),
  content:style({
    margin:"50px auto",
    width:"100%",
    zIndex:"-10",
    //position:"sticky",
    textAlign:"center",
  }),
  img:style({
    margin:"auto",
    position:"relative",
    zIndex:"-10000",
    width:"180px",
    aspectRatio:"1/1",  
  }),
  imagebox:style({
    width:"300px",
    margin:"auto",
    '@media':{
      'screen and (max-width:300px)':{
        width:"90%",
      }
    }
  }),
  img2:style({
    borderRadius:"50%",
    
  }),
  li:style({
    listStyle:"none",
    marginTop:"30px",
    '@media':{
      'screen and (min-width:900px)':{
        margin:"20px",
    
      }
    },
  }),
  p:style({
    fontSize:"13px",
    textAlign:"center",
    width:"200px",
    margin:'15px auto',
    '@media':{
      'screen and (min-width:900px)':{
        width:"300px",
        fontSize:"20px",
    

      },
    }

  }),
  icon:style({
    ':hover':{
      fontSize:"50px",
      transition:"0.4s"
    },
  }),
  pass:style({
    margin:"0",
    fontSize:"20px"
  }),
  box:style({
    border:"2px solid gray",
    width:"300px",
    margin:"auto",
    borderRadius:"10%",
    marginBottom:"20px",
    '@media':{
      'screen and (max-width:300px)':{
        width:"90%",
      }
    }
  }),
  title:style({
   marginTop:"-19px",
   width:"180px",
   marginLeft:"8px",
   backgroundColor:"yellow",
   color:"red"
   
  }),
  title2:style({
   marginTop:"-19px",
   width:"100px",
   backgroundColor:"yellow",
   color:"red",
   marginLeft:"8px",
  }),
  a:style({
    color:"blue",
    ':hover':{
      backgroundColor:"aqua",
      transition:"0.4s"
    }
  }),
  ol:style({
    padding:"0",
  })
};

export default home;