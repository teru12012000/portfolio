import Link from "next/link";
import { FC, ReactNode } from "react";
import { Headlink } from "../data/linkdata";
import head from "./styles/header.css";

type Props={
  link:Headlink[],
}




const HeaderLink:FC<Props> = ({link}) => {
  return (  
      <>    
        {link.map((item,index)=>(
          <div className={head.list} key={index}>
            <Link href={item.link} style={{color:"white"}} target="_blank" aria-label={item.detail}>
              {item.icon}<br/>
              {item.title}
            </Link>
          </div>
        ))}
      </>
  );
}

export default HeaderLink;