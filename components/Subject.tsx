import { FC } from "react";
import { sub } from "../data/subjectdata";
import univerce from "../styles/univercity.css";
type Props={
  grade:string;
  subject:sub[];
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
              {item.subject}
            </li>
          ))}
        </ul>
      </div>
      <p>{thought}</p>
    </div>
  );
}

export default Subject;