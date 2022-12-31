import type { NextPage } from 'next';
import head from './styles/header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLink from './HeaderLink';
import { headerlinkName } from '../data/linkdata';
import Link from 'next/link';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Back from './Back';
import {FC, useState} from 'react';
import {linkname,link} from "../data/linkdata";
import { width } from '@mui/system';
type Props={
  open:string;
}


const Header: FC<Props> = ({open}) => {
  const [dis,setDis]=useState<string>("none");
  const [color,setColor]=useState<string>("transparent");
  const handleClick=()=>{
    if(dis==="none"){
      setDis("block")
      setColor("white")
    }else{
      setDis("none")
      setColor("transparent")
      
    }
  }
  return (
    <div style={{position:"fixed",top:"0",width:"100%"}}>
      <header className={head.header}>
        <h1>TERUSI</h1>
        <div>
          <HeaderLink link={headerlinkName}>
            <GitHubIcon className={head.icon}/>
            <TwitterIcon className={head.icon}/>
            <TwitterIcon className={head.icon}/>
          </HeaderLink>
        </div>
      </header>
      <div style={{display:open,width:"100%",justifyContent:"space-between"}}>
        <div>
          <Back/>
        </div>
        <div 
          className={head.hamlist}
          style={{backgroundColor:color}}
        >
          <div style={{textAlign:"right"}}>
            <MenuRoundedIcon 
              sx={{fontSize:40}}
              onClick={()=>handleClick()}
            />
          </div>
          <div>
            <ul
              className={head.hamul}
              style={{
                display:dis,
              }}
            >
              {linkname.map((item:link,index:number)=>(
                <li 
                  key={index}
                  style={{
                    listStyle:"none",
                    padding:"10px",
                    textAlign:"center",
                    borderBottom:"2px solid gray",
                    
                  }}
                >
                  <Link href={item.link} target={item.target}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Header;