import intro from "../styles/profile.css";
import {FC, ReactNode} from "react";
type Props={
  title:string;
  children: ReactNode;
}
const Menucard:FC<Props> = ({title,children}) => {
  return (
    <div className="container">
        <h2 
          className={intro.h2}
          style={{
            marginTop:"200px",
          }}
        >
          {title}
        </h2>
        <div 
          className="w-80 mw-auto" 
          id="intro"
          style={{
              backgroundColor:"silver"
            }}
        >
          <div className="text-center">
            {children}
          </div>
        </div>
      </div>
  );
}

export default Menucard;