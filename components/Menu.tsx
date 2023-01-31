import Link from "next/link";
import { FC, ReactNode } from "react";
import { link } from "../data/linkdata";
import home from "../styles/Home.css";

type Props={
  name:link[];
  detail:string;
  children:ReactNode[];
}


const Menu:FC<Props> = ({name,detail,children}) => {
  return (
    <div 
      className="container border border-dark rounded-3 w-50 mw-auto "
    >
          <ol className={home.ol}>
            {name.map((item,index)=>(
              <li key={index} className={home.li}>
                <Link href={item.link} style={{color:"black"}} target={item.target}>
                  {children[index]}
                  <p className={home.pass}>{item.title}</p>
              </Link>
            </li>
            ))}
          </ol>
          <p>{detail}</p>
        </div>
  );
}

export default Menu;