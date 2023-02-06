import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import TerminalRoundedIcon from '@mui/icons-material/TerminalRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ReactNode } from 'react';
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
    icon:(<ContactPageRoundedIcon/>)
  },
  {
    link:"/univercity",
    title:"大学",
    target:"",
    icon:(<SchoolRoundedIcon />)
  },
  {
    link:"/myskil",
    title:"スキル",
    target:"",
    icon:(<LaptopChromebookRoundedIcon />)
  },
  {
    link:"https://blog-phi-nine-26.vercel.app/",
    title:"blog(外部リンク)",
    target:"_blank",
    icon:(<EditRoundedIcon />)
  },
  {
    link:"/running",
    title:"ランニング",
    target:"",
    icon:(<DirectionsRunRoundedIcon />)
  },
  {
    link:"/Production",
    title:"制作物",
    target:"",
    icon:(<TerminalRoundedIcon/>)
  },
]

export default linkname;