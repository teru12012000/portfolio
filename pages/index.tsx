import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import home from '../styles/Home.css'
import Link from 'next/link';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
const Home: NextPage = () => {
  
  return (
    <>
      <Head>
        <title>self-introduction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className={home.first}>
        <figure className={home.img}>
          <Image
              src='/img/me.jpg'
              layout='fill' 
              alt='logo'
              className={home.img2}
          />
        </figure>
        <p className={home.p}>
          はじめまして。TERUSIです。
          現在大学4年生です。このサイトは
          私の自己紹介サイトになります。
        </p>
      </div>
      <div className={home.content}>
        <h1 >menu</h1>
        <div className={home.box}>
          <h2 className={home.title}>introduction</h2>
          <ol className={home.ol}>
            <li className={home.li}>
              <Link href='/myintro'>
                <a>
                  <ContactPageRoundedIcon className={home.icon} />
                  <p className={home.pass}>プロフィール</p>
                </a>
              </Link>
            </li>
          </ol>
        </div>
        <div className={home.box}>
          <h2 className={home.title}>technology</h2>
          <ol className={home.ol}>
            <li className={home.li}>
              <Link href='/myskil'>
              <a>
                <LaptopChromebookRoundedIcon className={home.icon}/>
                <p className={home.pass}>スキル</p>
              </a>
              </Link>
            </li>
          </ol>
        </div>
        <div className={home.box}>
          <h2 className={home.title2}>others</h2>
          <ol className={home.ol}>
            <li className={home.li}>
              <Link href='/running'>
                <a>
                  <DirectionsRunRoundedIcon className={home.icon}/>
                  <p className={home.pass}>ランニング</p>
                </a>
              </Link>
            </li>
          </ol>
        </div>
        <div className={home.box}>
          <h2 className={home.title2}>contact</h2>
          <ol className={home.ol}>
            <li className={home.li}>
              <Link href='https://twitter.com/s1i2o0n1'>
                <a>
                  <TwitterIcon className={home.icon}/>
                  <p className={home.pass}>ランニング、日常垢</p>
                </a>
              </Link>
            </li>
            <li className={home.li}>
              <Link href='https://twitter.com/TERUSI1201'>
                <a>
                  <TwitterIcon className={home.icon}/>
                  <p className={home.pass}>技術用垢</p>
                </a>
              </Link>
            </li>
          </ol>
          <p>
            上記ヘッダーのアカウントは技術用です。私は2つのアカウントを持っています。
            連絡の際はどちらのアカウントでも構いません。
          </p>
        </div>
      </div>
    </>
  )
}

export default Home
