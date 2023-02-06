import { FC, ReactNode, useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import head from "./styles/header.css";
import { IconButton, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AnimatePresence } from "framer-motion";
import { grey, red } from "@mui/material/colors";
import Link from "next/link";
type Headlink={
  link:string;
  title:string;
  detail:string;
}
type link={
  link:string;
  title:string;
  target:string;
  icon:ReactNode;
}
type Props={
  linkname:link[];
}
const Hambargar:FC<Props> = ({linkname}) => {
  
  const [dis, setDis] = useState<boolean>(false);
  const [hei,setHeight]=useState<string|number|undefined>("0");
  const [color, setColor] = useState<string>("transparent");
  const handleClick = () => {
    setDis(!dis)
    if (!dis) {
      setColor("white")
      setHeight("100vh")
    } else {
      setColor("transparent")
      setHeight("0")
    }
  }
  return (
    <div
        className={head.hamlist}
        style={{ 
          backgroundColor: color,
          height: hei, 
        }}
      >
      <div className="text-end">
      <IconButton aria-label="menu"  onClick={() => handleClick()}>
        {!dis?(
          <MenuRoundedIcon
            sx={{ fontSize: 40 }}
          />
        ):(
          <CloseRoundedIcon
            sx={{ fontSize: 40 }}
          />
        )}
      </IconButton>
      
          <div>
            <AnimatePresence>
              {dis?(
                <>
                  <List
                    className={head.hamul}
                    aria-labelledby="menu"
                    subheader={
                      <ListSubheader component="div" id="nested-list-subheader" className="text-start">
                        Pages
                      </ListSubheader>
                    }
                  >
                    {linkname.map((item:link,index:number)=>(
                      <Link href={item.link} 
                        key={index} 
                        target={item.target}
                        style={{textDecoration:"none",color:"black"}}
                      >
                        <ListItemButton>
                          <ListItemIcon>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.title} color={grey[900]}/>
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </>
              ):null}  
            </AnimatePresence>
          </div>
        </div>
      </div>
  );
}

export default Hambargar;