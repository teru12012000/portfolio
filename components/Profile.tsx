import type { NextPage } from 'next';
import Image from 'next/image';
import intro from './styles/profile.css';
import Link from 'next/link';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import Back from './Back';
type my_profile={
  question:string;
  answer:string;
  detail:string;
}

const Profile: NextPage = () => {
  const my_intro:my_profile[]=[
    {
      question:"出身地",
      answer:'茨城県坂東市',
      detail:"めっちゃド田舎。駅も近くになく、車が必須の地域。田んぼと畑がとても多く、野菜や米の生産が豊富。"
    },
    {
      question:"生年月日",
      answer:'2000年12月1日',
      detail:"特に詳細はなし。"
    },
    {
      question:"出身高校",
      answer:'常総学院高等学校',
      detail:"野球や吹奏楽で有名な茨城県にある高校。高校の中では校則が厳しく勉強嫌いな人は部活に入っていないとやっていけないかも。。",
    },
    {
      question:"大学",
      answer:'東京理科大学',
      detail:"留年する人が多いで有名な大学。レポートの量が多く、テストの難易度も高め。友達がいなく、勉強をさぼっているとほぼ留年する。"
    },
    {
      question:"学部学科",
      answer:'工学部情報工学科',
      detail:"人工知能や数理最適化、画像処理などを学んでいく。プログラミングを学ぶと思いきやほとんどが数学。。",
    },
    {
      question:"中学部活動",
      answer:'サッカー部',
      detail:"ポジションは色々やっていた。キーパーとボランチ以外はできると思う。市内総体のPK戦では最後に蹴って決めて優勝した。",
    },
    {
      question:"高校部活動",
      answer:'駅伝部',
      detail:"2年の新人駅伝、3年の県駅伝に出場した。悔しい結果が続いた。この悔しさが大学で陸上を続けるきっかけになった。",
    },
    {
      question:"大学部活動",
      answer:'陸上部',
      detail:"箱根駅伝予選会出場を目指しトレーニングしてきた。部活は週2と少ないが自分たちで練習して力をつける努力をみんなしている。",
    },
    {
      question:"趣味",
      answer:'アニメ鑑賞',
      detail:"「好きなアニメは？」と聞かれるとなかなか答えられない。ジャンルは広いが恋愛系とか主人公最強系が特に好きだと思う..."
    }, 
    {
      question:"好物",
      answer:'焼肉、ラーメン',
      detail:"この二つは毎日でも食べたい。特にラーメンは二郎系や家系をよく食べる。なんかおすすめの店があったら教えてほしいです！"
    },
  ]
  return (
     <div className={intro.content} id="intro">
      <Back/>
        <h2 className={intro.h2}>自己紹介</h2>
        <div className={intro.passage}>
        {my_intro.map((item,index)=>(
            <div className={intro.box} key={index}>
              <h2>{item.question}</h2>
              <h3>{item.answer}</h3>
              <p className={intro.pass}>{item.detail}</p>
            </div>
          ))}
        </div>
       
        
        
       
        
     </div>
  )
}

export default Profile;