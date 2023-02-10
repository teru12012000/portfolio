import { FC } from "react";
import univerce from "../styles/univercity.css";
type Props={
  grade:string;
  subject:string[];
  thought:string;
}

const Subject:FC<Props> = ({grade,subject,thought}) => {
  return (
    <div className={univerce.box}>
      <h2 className={univerce.h2}>{grade}</h2>
      <div className={univerce.sub}>
        <ul className={univerce.ul}>
          {subject.map((item,index)=>(
            <li key={index} className={univerce.li}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p>{thought}</p>
    </div>
  );
}

export default Subject;