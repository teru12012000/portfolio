import type { NextPage } from 'next';
import Image from 'next/image';
import intro  from './styles/profile.css';
import skils  from './styles/skils.css';
import Link from 'next/link';
import Head from 'next/head';
import Modal from 'react-modal';
import { handleWebpackExtenalForEdgeRuntime } from 'next/dist/build/webpack/plugins/middleware-plugin';
import { useState } from 'react';
type icons={
  link:string;
}
type lang={
  langage:string;
  start:string;
  level:string;
}
Modal.setAppElement('#__next');
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
};
const Skils: NextPage = () => {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  const Skil:lang[]=[
    {
      langage:"C",
      start:"18歳",
      level:"ライブラリは調べないと厳しいが基本的な文法は理解している。"
    },
    {
      langage:"C++",
      start:"19歳",
      level:"ライブラリは調べないと厳しいが基本的な文法は理解している。"
    },
    {
      langage:"python",
      start:"19歳",
      level:"リストの操作やpandasなどの使い方が完璧でない。"
    },
    {
      langage:"Javascript",
      start:"20歳",
      level:"DOM取得や基本的な書き方については理解しているが、日付取得など調べないとできない部分もある。"
    },
    {
      langage:"Typescript",
      start:"21歳",
      level:"Nextjs等で使用しているが、今のところ迷いなく使えている。今後詰まる可能性あり。"
    },
    {
      langage:"php",
      start:"20歳",
      level:"実験で使用したことがあり文法は覚えているが配列操作などわからない部分がいまだに多い。最近は全く使っていない。"
    },
    {
      langage:"html,css",
      start:"18歳",
      level:"htmlに関しては調べることはたまにあるがスムーズに書ける方だと思う。cssは調べることが多い。displayの部分などまだ理解できていない。"
    },
    {
      langage:"Nodejs",
      start:"21歳",
      level:"動画を見ながらサーバーを構築してみたが理解できない部分がほとんど。"
    },
    {
      langage:"React",
      start:"21歳",
      level:"最近主に使っている。勉強中なので理解できていないところが多い。このサイトはNextjsを使用している。"
    },
    {
      langage:"Java",
      start:"21歳",
      level:"文法とclassを勉強中。今後GUIプログラミングについても勉強予定。"
    }
  ]
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
    {
      link:'/img/java.png'
    },
    
  ]
  const closeModal=()=>{
    setModalIsOpen(false);
  }
  const handlebtn=()=>{
    setModalIsOpen(true);
  }
  return (
    
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
        <div className={skils.modal}>
          <h2>詳細</h2>
          <table border={1} className={skils.table}>
            <thead>
              <tr className={skils.head}>
                <td className={skils.tskil}>
                  スキル
                </td>
                <td className={skils.tstart}>
                  開始時
                </td>
                <td>
                  詳細
                </td>
              </tr>
            </thead>
            {Skil.map((item,index)=>(
              <tbody key={index}>
                <tr key={index} className={skils.body}>
                  <td className={skils.tskil}>{item.langage}</td>
                  <td>{item.start}</td>
                  <td>{item.level}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={skils.li}>
            <Link href="/">
              <a className={skils.link}>TOPに戻る</a>
            </Link>
          </div>
     </div>
  )
}

export default Skils;