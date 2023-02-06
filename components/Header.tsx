import type { NextPage } from 'next';
import head from './styles/header.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import HeaderLink from './HeaderLink';
import Back from './Back';
import { FC } from 'react';
import Hambargar from './Hambargar';
import linkname from '../data/linkname';
import headerlinkName from '../data/headerlink';

type Props = {
  open: string;
}


const Header: FC<Props> = ({ open }) => {
  return (
    <div style={{ position: "fixed", top: "0", width: "100%" }}>
      <header className={head.header}>
        <h1>TERUSI</h1>
        <div>
          <HeaderLink link={headerlinkName}/>
            
        </div>
      </header>
      <div style={{ display: open, width: "100%", justifyContent: "space-between" }}>
        <div>
          <Back />
        </div>
        <Hambargar linkname={linkname}/>
      </div>
    </div>
  )
}

export default Header;