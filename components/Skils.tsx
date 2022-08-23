import type { NextPage } from 'next';
import Image from 'next/image';
import intro  from './profile.css';
import skils  from './skils.css';
import Link from 'next/link';
import Head from 'next/head';
type icons={
  link:string;
}
const Skils: NextPage = () => {
  const langage:icons[]=[
    {
      link:'/img/Clang.png'
    },
    {
      link:'/img/Cplas.png'
    },
    {
      link:'/img/python.png'
    },
    {
      link:'/img/js.png'
    },
    {
      link:'/img/ts.png'
    },
    
  ]
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </Head>
      <div className={skils.content} id="intro">
        <h2 className={skils.h2}>スキル</h2>
        <p>1度でも経験があるものを記載しています。経験が浅いものがほとんどです。</p>
        <div className={skils.box}>
          {langage.map((item,index)=>(
            <figure className={skils.img} key={index}>
            <Image
              src={item.link}
              layout='fill' 
              alt='logo'
            />
          </figure>
          ))}
        </div>
     </div>
    </>
  )
}

export default Skils;