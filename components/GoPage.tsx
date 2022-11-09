import Link from "next/link";
import { FC, ReactNode } from "react";
import home from "../styles/Home.css";


type Props={
  name:string;
  detail:string;
  children:ReactNode;
}

const GoPage:FC<Props> = ({name,detail,children}) => {
  return (
    <div className={home.box}>
    <h2 className={home.title}>introduction</h2>
    <ol className={home.ol}>
      <li className={home.li}>
        <Link href='/myintro'>
          <a>
            {children}
            <p className={home.pass}>{name}</p>
          </a>
        </Link>
      </li>
    </ol>
  </div>
  );
}

export default GoPage;