import type { NextPage } from 'next';
import Image from 'next/image';
import head from './styles/header.css';
import Link from 'next/link';
import intro from '../styles/profile.css';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
const Back: NextPage = () => {
  return (
    <>
      <div className={intro.content1}>
        <Link href="/">
          <OtherHousesRoundedIcon className={intro.icon}/>
          <p className={intro.p}>TOP</p>
        </Link>
      </div>
      
    </>
  )
}

export default Back;