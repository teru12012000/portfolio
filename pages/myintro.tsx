import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '@mui/material/Box';
import Header from '../components/Header'
import { my_intro, my_profile } from '../data/profiledata'
import { Card, Modal, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react';
import Menucard from '../components/Menucard'
import Animate from '../components/Animate';
const Profile: NextPage = () => {
  const [selectId,setSelectId]=useState<string|null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=(id:string)=>{
    setSelectId(id);
    setEditModalIsOpen(true);
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
      <Menucard title='自己紹介' marginSize={true}>
        {my_intro.map((item:my_profile,index:number)=>(
          <motion.div 
            key={index} 
            className="d-inline-block m-4"
            layoutId={String(index)}
            onClick={()=>openmodal(String(index))}
          >
            <Card sx={{width:200}} className="text-start">
              <Typography gutterBottom variant="h4" component="div">
                {item.question}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {item.answer}
              </Typography>
            </Card> 
          </motion.div>
        ))}
        <Animate
          selectId={selectId}
          editModalIsOpen={editModalIsOpen}
          setSelectId={setSelectId}
          setEditModalIsOpen={setEditModalIsOpen}
        >
          <Typography gutterBottom variant="h4" component="div">
            {my_intro[Number(selectId)].question}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {my_intro[Number(selectId)].answer}
          </Typography>
          <Typography gutterBottom component="div">
            {my_intro[Number(selectId)].detail}
          </Typography>
        </Animate>
      </Menucard>
    </div>
  )
}

export default Profile
