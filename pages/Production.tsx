import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import Product from "../components/product";
import production from "../components/styles/Product.css";
import { carddeta, desktopapp, jobhunting, minesweeper, numeron, numeronweb, titlePhoto, weblink } from "../data/product";
import Photolink from "../components/Photolink";
import Link from "next/link";
import { Card, CardMedia } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion'
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Production:NextPage = () => {
  return (
    <div style={{margin:"200px auto"}}>
      <Head>
        <title>制作物</title>
        <meta name="description" content="私が作った制作物です。" />
      </Head>
      <Header open={"flex"}/>
      <h1 className={production.h1}>制作物</h1>
      <div className="container">
        {titlePhoto.map((item:carddeta,index:number)=>(
          <motion.div
            key={index}
            className="d-inline-block m-4"
          >
            <Card sx={{width:230,height:300}}>
            <CardMedia
              sx={{width:230,height:100}}
              image={item.link}
              title={item.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom component="div">
                {item.language}
              </Typography>
            </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Production;