import type { NextPage } from 'next';
import Image from 'next/image';
import head from './header.css';
import Link from 'next/link';

const Header: NextPage = () => {
  return (
    <>
      <header className={head.header}>
        <h1 className={head.h1}>TERUSHI</h1>
        <ul>
          <li className={head.list}>
            <Link href="#intro">
              <a className={head.link}>自己紹介</a>
            </Link>
          </li>
          <li className={head.list}>
            <Link href="#">
              <a className={head.link}>スキル</a>
            </Link>
          </li>
          <li className={head.list}>
            <Link href="#">
              <a className={head.link}>作成物</a>
            </Link>
          </li>
        </ul>
      </header>
      
    </>
  )
}

export default Header;