import intro from "../styles/profile.css";
import {FC, ReactNode} from "react";
type Props={
  title:string;
  marginSize:boolean;
  children: ReactNode;
}
const Menucard:FC<Props> = ({title,marginSize,children}) => {
  return (
    <div className="container">
      <h2 
        className={intro.h2}
        style={{
          marginTop:marginSize?"200px":"50px",
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
      <p className="text-center">Tap to open a card.</p>
    </div>
  );
}

export default Menucard;