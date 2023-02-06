import { motion } from "framer-motion";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { link } from "../data/linkdata";
import home from "../styles/Home.css";

type Props={
  name:link[];
  detail:string;
}


const Menu:FC<Props> = ({name,detail}) => {
  return (
    <div 
      className="container border border-dark rounded-3 w-50 mw-auto "
    >
          <ol className={home.ol}>
            {name.map((item,index)=>(
              <motion.li 
                key={index} 
                className="list-unstyled mt-4" 
                whileHover={{ scale: 1.3 }}
              >
                <Link href={item.link} style={{color:"black"}} target={item.target}>
                  {item.icon}
                  <p className={home.pass}>{item.title}</p>
              </Link>
            </motion.li>
            ))}
          </ol>
          <p>{detail}</p>
        </div>
  );
}

export default Menu;