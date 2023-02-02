import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import intro from '../styles/profile.css'
import { my_intro } from '../data/profiledata'
import { Card, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
const customStyles = {
    top: "50%",
    left: "50%",
    width:"50%",
    height:"50%",
    right: "auto",
    bottom: "auto",
    overflow:'auto',
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  
};
const Profile: NextPage = () => {
  const [selectId,setSelectId]=useState<string|null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=(id:string)=>{
    setEditModalIsOpen(true);
    setSelectId(id);
  }
  const closemodal=()=>{
    setEditModalIsOpen(false);
    setSelectId(null);
  }

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
              <motion.div 
                key={index} 
                className="d-inline-block m-4"
                layoutId={String(index)}
                onClick={()=>openmodal(String(index))}
              >
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
