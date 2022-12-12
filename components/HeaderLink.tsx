import Link from "next/link";
import { FC, ReactNode } from "react";
import { Headlink } from "../data/linkdata";
import head from "./styles/header.css";

type Props={
  link:Headlink[],
  children:ReactNode[],
}




const HeaderLink:FC<Props> = ({link,children}) => {
  return (  
      <>    
        {link.map((item,index)=>(
          <div className={head.list} key={index}>
            <Link href={item.link} target="_blank" aria-label={item.detail}>
              {children[index]}<br/>
              {item.title}
            </Link>
          </div>
        ))}
      </>
  );
}

export default HeaderLink;