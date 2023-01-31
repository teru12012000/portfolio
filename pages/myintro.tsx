import type { NextPage } from 'next'
import Head from 'next/head'
import Back from '../components/Back'
import Header from '../components/Header'
import intro from '../styles/profile.css'
import { my_intro } from '../data/profiledata'
import { Card, Typography } from '@mui/material'

const profile: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <meta name="description" content="プロフィールです" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header open={"flex"}/>
      <div className="container">
      <h2 
        className={intro.h2}
        style={{
          marginTop:"200px",
        }}
      >
        自己紹介
      </h2>
      <div 
        className="w-80 mw-auto" 
        id="intro"
        style={{
            backgroundColor:"silver"
          }}
      >
        <div className="text-center">
          {my_intro.map((item,index)=>(
            <div key={index} className="d-inline-block m-4">
              <Card sx={{height:350,width:200}} className="text-start">
                <Typography gutterBottom variant="h4" component="div">
                  {item.question}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {item.answer}
                </Typography>
                <Typography gutterBottom component="div">
                  {item.detail}
                </Typography>
              </Card> 
            </div>
          ))}
        </div>
          
        </div>
      </div>
      
    </div>
  )
}

export default profile
