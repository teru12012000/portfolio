import type { NextPage } from 'next';
import Link from 'next/link';
import intro from '../styles/profile.css';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import { IconButton } from '@mui/material';
const Back: NextPage = () => {
  return (
    <>
      <div className={intro.content1}>
        <Link href="/">
          <IconButton>
            <OtherHousesRoundedIcon
              sx={{fontSize:45}}
            />
          </IconButton>
        </Link>
      </div>
      
    </>
  )
}

export default Back;