import Link from "next/link";
import { FC, ReactNode } from "react";
import { link } from "../pages/data/linkdata";
import home from "../styles/Home.css";

type Props={
  name:link[];
  detail:string;
  children:ReactNode[];
}


const Menu:FC<Props> = ({name,detail,children}) => {
  return (
    <div className={home.box}>
          <ol className={home.ol}>
            {name.map((item,index)=>(
              <li key={index} className={home.li}>
                <Link href={item.link} target={item.target}>
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