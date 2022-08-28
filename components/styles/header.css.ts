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
    '@media':{
      'screen and (max-width:300px)':{
        textAlign:'center',
        fontSize:"20px",
        margin:"20px 0 0 3px"

      },
    }
  }),
  list:style({
    display:"inline-block",
    margin:"15px 0 0 15px",
    '@media':{
      'screen and (max-width:500px)':{
        margin:"20px 0 0 0"
      },
      'screen and (max-width:300px)':{
        margin:"10px 0 0 0",

      },
    }
  }),
  link:style({
    marginRight:"10px",
    backgroundColor:"#33FFCC",
    fontSize:"20px",
    padding: "10px",
    color:"white",
    borderRadius:"20%",
    ':hover':{
      backgroundColor:"orange",
      transition:"0.4s"
    },
    '@media':{
      'screen and (max-width:500px)':{
        fontSize:"15px",
        padding:"5px",
      },
      'screen and (max-width:400px)':{
        fontSize:"10px",
        padding:"5px",
      }

    }
  }),
};

export default head;