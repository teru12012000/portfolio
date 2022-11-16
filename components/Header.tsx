import type { NextPage } from 'next';
import head from './styles/header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLink from './HeaderLink';
import { headerlinkName } from '../data/linkdata';
const Header: NextPage = () => {
  return (
    <>
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
      
    </>
  )
}

export default Header;