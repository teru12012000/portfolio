import { Headlink } from "./linkdata";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import head from "../components/styles/header.css";


const headerlinkName:Headlink[]=[
  {
    link:"https://github.com/teru12012000",
    title:"My github",
    detail:"Go TERUSI github",
    icon:(<GitHubIcon className={head.icon} />)
  },
  {
    link:"https://twitter.com/s1i2o0n1",
    title:"run,日常垢",
    detail:"Go TERUSI twitter",
    icon:(<TwitterIcon className={head.icon} />)
  },
  {
    link:"https://twitter.com/TERUSI1201",
    title:"技術用垢",
    detail:"Go TERUSI twitter",
    icon:(<TwitterIcon className={head.icon} />)
  }
]

export default headerlinkName;