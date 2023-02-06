import Link from "next/link";
import { FC, ReactNode, useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import head from "./styles/header.css";
import { IconButton } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { AnimatePresence } from "framer-motion";
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
  const [color, setColor] = useState<string>("transparent");
  const handleClick = () => {
    setDis(!dis)
    if (!dis) {
      setColor("white")
    } else {
      setColor("transparent")
    }
  }
  return (
    <div
        className={head.hamlist}
        style={{ backgroundColor: color, }}
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
                <ul
                className={head.hamul}
                >
                  {linkname.map((item: link, index: number) => (
                    <li
                      key={index}
                      style={{
                        listStyle: "none",
                        padding: "20px",
                        textAlign: "center",
                        borderBottom: "2px solid gray",
                      }}
                    >
                      <Link href={item.link} target={item.target}>
                        
                        {item.icon}
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ):null}  
            </AnimatePresence>
          </div>
        </div>
      </div>
  );
}

export default Hambargar;