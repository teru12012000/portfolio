import type { NextPage } from 'next';
import Image from 'next/image';
import intro from './styles/profile.css';
import Link from 'next/link';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
type my_profile={
  question:string;
  answer:string;
}

const Profile: NextPage = () => {
  const my_intro:my_profile[]=[
    {
      question:"出身地",
      answer:'茨城県坂東市'
    },
    {
      question:"生年月日",
      answer:'2000年12月1日'
    },
    {
      question:"出身高校",
      answer:'常総学院高等学校'
    },
    {
      question:"大学",
      answer:'東京理科大学'
    },
    {
      question:"学部学科",
      answer:'工学部情報工学科'
    },
    {
      question:"中学部活動",
      answer:'サッカー部'
    },
    {
      question:"高校部活動",
      answer:'駅伝部'
    },
    {
      question:"大学部活動",
      answer:'陸上部'
    },
    {
      question:"趣味",
      answer:'アニメ鑑賞'
    }, 
    {
      question:"好物",
      answer:'焼肉、ラーメン'
    },
  ]
  return (
     <div className={intro.content} id="intro">
      <div className={intro.passage}>
      <div className={intro.content1}>
        <Link href="/">
              <a>
                <OtherHousesRoundedIcon className={intro.icon}/>
                <p className={intro.p}>TOP</p>
              </a>
        </Link>
      </div>
        <h2 className={intro.h2}>自己紹介</h2>
        <ul className={intro.ul}>
          {my_intro.map((item,index)=>(
            <li className={intro.list} key={index}>
              {item.question}：<span className={intro.span}>{item.answer}</span>
            </li>
          ))}
        </ul>
        
      </div>
     </div>
  )
}

export default Profile;