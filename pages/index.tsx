import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import home from '../styles/Home.css'
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import LaptopChromebookRoundedIcon from '@mui/icons-material/LaptopChromebookRounded';
import DirectionsRunRoundedIcon from '@mui/icons-material/DirectionsRunRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import Menu from '../components/Menu'
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { linkname, twitteraccountcoment, twitterName } from '../data/linkdata'
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
        <Menu name={linkname} detail={''}>
          <ContactPageRoundedIcon className={home.icon}/>
          <SchoolRoundedIcon className={home.icon}/>
          <LaptopChromebookRoundedIcon className={home.icon}/>
          <EditRoundedIcon className={home.icon}/>
          <DirectionsRunRoundedIcon className={home.icon}/>
        </Menu>
        <h1 >contact</h1>
        <Menu name={twitterName} detail={twitteraccountcoment}>
          <TwitterIcon className={home.icon}/>
          <TwitterIcon className={home.icon}/>
        </Menu>
      </div>
    </>
  )
}

export default Home
