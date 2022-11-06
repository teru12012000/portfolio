import type { NextPage } from 'next';
import Image from 'next/image';
import head from './styles/header.css';
import Link from 'next/link';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
const Header: NextPage = () => {
  return (
    <>
      <header className={head.header}>
        <h1 className={head.h1}>TERUSI</h1>
        <ul className={head.ul}>
          <li className={head.list}>
            <Link href="https://github.com/teru12012000">
              <a target="_blank" aria-label="Go TERUSI github" className={head.link}>
                <GitHubIcon 
                  className={head.icon}
                  sx={{fontSize:40}}
                />
              </a>
            </Link>
          </li>
          <li className={head.list}>
            <Link href="https://twitter.com/TERUSI1201">
              <a target="_blank" aria-label="Go TERUSI twitter" className={head.link}>
                <TwitterIcon 
                  className={head.icon}
                  sx={{fontSize:40}}
                />
              </a>
            </Link>
          </li>
        </ul>
      </header>
      
    </>
  )
}

export default Header;