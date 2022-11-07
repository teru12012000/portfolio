import type { NextPage } from 'next';
import Image from 'next/image';
import run from './styles/running.css';
import home from '../styles/Home.css';
import Link from 'next/link';
import Back from './Back';
import { randomUUID } from 'crypto';
type best={
  distance:string;
  time:string;
}

const Running: NextPage = () => {
  const mybest:best[]=[
    {
      distance:'1500m',
      time:'4分17秒',
    },
    {
      distance:'5000m',
      time:'16分00秒',
    },
    {
      distance:'10000m',
      time:'33分30秒',
    },
    {
      distance:'ハーフマラソン',
      time:'77分13秒',
    },
  ]
  return(
    <div className={home.first}>
        <Back/>
        <figure className={run.img}>
            <Image
              src='/img/running.jpg'
              layout='fill' 
              alt='logo'
              className={run.img2}
            />
        </figure>
        <h1>ランニングについて</h1>
        <p>
          私は高校、大学の部活動で陸上競技の長距離種目
          をやってきました。
        </p>
        <div className={run.content}>
          <h2>自己ベスト</h2>
          <ol className={run.ol}>
            {mybest.map((item,index)=>(
              <li key={index} className={run.li}>
                {item.distance}:{item.time}
              </li>
            ))}
          </ol>
        </div>
        <div className={run.content}>
          <h2>箱根駅伝予選会</h2>
          <p className={run.pass}>
            98回99回大会に参加しました。<br/>
            どちらの大会も悔しい結果に終わってしまいました。<br/>
            98回は8kの脱水でゴール後救急搬送されるということに...<br/>
            99回はリベンジを誓ったが14kで足をつってしまい
            思うように走れませんでした。しかしこの大会に出れたことは良い経験になりました。<br/>
            納得のいく結果を出すことのできない弱いランナーではあるが、
            この悔しさをこれからの走りにぶつけてさらに自身の成長につなげていきたいです。
          </p>
        </div>
        <div className={run.content}>
          <h2>目標</h2>
          <p className={run.pass}>
            大学での目標は箱根駅伝予選会で良い走りをすることでした。<br/>
            箱根駅伝予選会が終わりこれからの目標は<br/>
            <span className={run.span}>
            「自分の体がつぶれない限り、
            自己ベストを狙っていく」<br/>
            「走ることを楽しんでいく！」<br/>
            </span>
            にしたいと思います。<br/>
            走ることはほんとに楽しいと感じます。<br/>
            良い結果を出すとより楽しさを増します。<br/>
            せっかくやるならこれからも記録を狙って頑張っていこうと思っています。
          </p>
        </div>
      </div>
  )
}

export default Running;





