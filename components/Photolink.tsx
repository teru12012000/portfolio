import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import production from "./styles/Product.css";
import { productionlink } from "../data/product";
type Props={
  photo:productionlink[];
}

const Photolink:FC<Props> = ({photo}) => {
  
  return (
    <>
      {photo.map((item,index)=>(
          <div key={index}>
          <Link  href={item.link} target="_blank">
              <figure 
                className={production.img}
              >
              <Image
                src={item.link}
                height={100}
                width={200}
                alt='logo'
              />
              </figure>
          </Link>
          <p>{item.title}</p>
          </div>
        ))}
    </>
  );
}

export default Photolink;