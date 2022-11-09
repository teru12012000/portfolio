import { height } from "@mui/system";
import { style } from "@vanilla-extract/css";

const univerce={
  content:style({
    width:"400px",
    textAlign:"center",
    margin:"20px auto",
    '@media':{
      'screen and (max-width:400px)':{
        width:"90%"
      }
    }
  }),
  box:style({
    marginTop:"30px",
    borderBottom:"2px solid gray",
  }),
  h2:style({
    textAlign:"left"
  }),
  sub:style({
    width:"300px",
    border:"2px solid gray",
    margin:"auto",
    marginBottom:"10px",
  }),
  li:style({
    listStyle:"none",
    margin:"5px",
  }),
  ul:style({
    padding:"0",
  })
}

export default univerce;