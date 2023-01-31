import { AnimatePresence } from "framer-motion";
import { FC, ReactNode, useState } from "react";
import production from "./styles/Product.css";
type Props={
  title:string;
  subtitle:string[];
  children:ReactNode[];
}
const Product:FC<Props>= ({title,subtitle,children}) => {
  const [display,setDisplay]=useState<boolean>(false);
  const handleClick=()=>{
    setDisplay(!display)
  }
  
  return (
    <div className={production.content}>
      <h2 
        className={production.h2}
        onClick={()=>handleClick()}
      >{title}</h2>
      <AnimatePresence>
        {display?(
          <div 
            className={production.box}
          >
          {subtitle.map((item:string,index:number)=>(
          <div key={index}>
            <h3>{item}</h3>
            {children[index]}
          </div>
          ))}
          <p className={production.p}>画像が見づらい人は画像をクリック</p>
          </div>
        ):null}
      </AnimatePresence>
      <p className={production.h1}>上記をクリック！</p>  
    </div>
  );
}

export default Product;