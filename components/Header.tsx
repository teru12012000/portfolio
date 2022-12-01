import type { NextPage } from 'next';
import head from './styles/header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLink from './HeaderLink';
import { headerlinkName } from '../data/linkdata';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import Link from 'next/link';
import intro from '../styles/profile.css';
import Back from './Back';
const Header: NextPage = () => {
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
      <div>
        <Back/>
      </div>
    </div>
  )
}

export default Header;