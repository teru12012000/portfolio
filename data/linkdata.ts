import { FC, ReactNode } from "react";
export type link={
  link:string;
  title:string;
  target:string;
  icon:ReactNode;
}

export type Headlink={
  link:string;
  title:string;
  detail:string;
}
export const headerlinkName:Headlink[]=[
  {
    link:"https://github.com/teru12012000",
    title:"My github",
    detail:"Go TERUSI github",
  },
  {
    link:"https://twitter.com/s1i2o0n1",
    title:"run,日常垢",
    detail:"Go TERUSI twitter",
  },
  {
    link:"https://twitter.com/TERUSI1201",
    title:"技術用垢",
    detail:"Go TERUSI twitter",
  }
]