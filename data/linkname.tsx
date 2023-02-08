import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import { ReactNode } from 'react';
const style={
  color:"black",
  fontSize:20,
}
type link={
  link:string;
  title:string;
  target:string;
  icon:ReactNode;
}
const linkname:link[]=[
  {
    link:"/myintro",
    title:"プロフィール",
    target:"",
    icon:(<ContactPageRoundedIcon sx={style}/>)
  },
  {
    link:"/univercity",
    title:"大学",
    target:"",
    icon:(<SchoolRoundedIcon sx={style}/>)
  },
  {
    link:"/myskil",
    title:"スキル",
    target:"",
    icon:(<LaptopChromebookRoundedIcon  sx={style}/>)
  },
  {
    link:"https://blog-phi-nine-26.vercel.app/",
    title:"blog(外部リンク)",
    target:"_blank",
    icon:(<EditRoundedIcon sx={style}/>)
  },
  {
    link:"/running",
    title:"ランニング",
    target:"",
    icon:(<DirectionsRunRoundedIcon sx={style}/>)
  },
  {
    link:"/Production",
    title:"制作物",
    target:"",
    icon:(<TerminalRoundedIcon sx={style}/>)
  },
]

export default linkname;