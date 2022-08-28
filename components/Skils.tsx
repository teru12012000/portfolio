import type { NextPage } from 'next';
import Image from 'next/image';
import intro  from './styles/profile.css';
import skils  from './styles/skils.css';
import Link from 'next/link';
import Head from 'next/head';
import Modal from 'react-modal';
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
    {
      link:'/img/php.png'
    },
    {
      link:'/img/html.png'
    },
    {
      link:'/img/css.png'
    },
    {
      link:'/img/node.png'
    },
    {
      link:'/img/react.png'
    },
    
  ]
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"/>
      </Head>
      <div className={skils.content} id="intro">
        <h2 className={skils.h2}>スキル</h2>
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