import type { NextPage } from 'next'
import Head from 'next/head'
import Back from '../components/Back'
import Header from '../components/Header'
import intro from '../styles/profile.css'
import { my_intro } from './data/profiledata'

const profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="プロフィールです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header open={"flex"}/>
      <div className={intro.content} id="intro">
        <h2 className={intro.h2}>自己紹介</h2>
        <div className={intro.passage}>
        {my_intro.map((item,index)=>(
            <div className={intro.box} key={index}>
              <h2>{item.question}</h2>
              <h3>{item.answer}</h3>
              <p className={intro.pass}>{item.detail}</p>
            </div>
          ))}
        </div>
       
        
        
       
        
     </div>
    </div>
  )
}

export default profile
