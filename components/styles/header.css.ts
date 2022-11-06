import { style } from "@vanilla-extract/css";

const head={
  header:style({
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"black",
    
  }),
  h1:style({
    color:'white',
    marginTop:"20px",
    paddingLeft:"20px",
    fontSize:"30px",
    '@media':{
      'screen and (max-width:300px)':{
        textAlign:'center',
        fontSize:"20px",
        margin:"20px 0 0 0"

      },
    }
  }),
  list:style({
    display:"inline-block",
    margin:"20px 0 0 20px",
    '@media':{
      'screen and (max-width:400px)':{
        margin:"15px 0 0 0"
      },
      'screen and (max-width:300px)':{
        margin:"10px 0 0 10px",

      },
    }
  }),
  link:style({
    marginRight:"10px",
    color:"white",
    borderRadius:"20%",
    width:"40px",
    height:"40px",
    '@media':{
      'screen and (max-width:500px)':{
        fontSize:"15px",
      },
      'screen and (max-width:400px)':{
        fontSize:"10px",
      }

    }
  }),
  icon:style({
    width:"35px",
    height:"35px",
    ':hover':{
      color:"aqua",
      transition:"0.4s"
    },
    '@media':{
      'screen and (max-width:300px)':{
       marginRight:"10px"
      }
    }
  }),
  ul:style({
    margin:"10px"
  }),
};

export default head;