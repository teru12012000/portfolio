import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { Skil } from '../data/skildata'
import { Card, Modal,Typography } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import { AnimatePresence, motion } from 'framer-motion'
import {useState} from "react";
import Animate from '../components/Animate'
import Menucard from './Menucard'
const Skils: NextPage = () => {
  const [selectId,setSelectId]=useState<string|null>(null);
  const [editModalIsOpen, setEditModalIsOpen] = useState<boolean>(false);
  const openmodal=(id:string)=>{
    setSelectId(id);
    setEditModalIsOpen(true);
  }
  return (
    <div>
      <Head>
        <title>myskils</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header open={"flex"}/>
      <Menucard title='言語とツール(ほんの少しでも触ったものも含む)' marginSize={true}>
        {Skil.map((item,index)=>(
            <motion.div 
            key={index} 
            className="d-inline-block m-4"
            layoutId={String(index)}
            onClick={()=>openmodal(String(index))}
            >
              <Card sx={{height:250,width:200}} className="text-start">
                <CardMedia
                  sx={{height:200}}
                  image={item.link}
                  title={item.langage}
                />
                <Typography gutterBottom variant="h4" component="div">
                  {item.langage}
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
          <CardMedia
            sx={{height:100,width:100,margin:"auto"}}
            image={Skil[Number(selectId)].link}
            title={Skil[Number(selectId)].langage}
          />
          <Typography gutterBottom variant="h5" component="div">
            {Skil[Number(selectId)].langage}
          </Typography>
          <Typography gutterBottom component="div">
            {Skil[Number(selectId)].level}
          </Typography>
        </Animate>
      </Menucard>
    </div>
  )
}

export default Skils
