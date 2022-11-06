import type { NextPage } from 'next';
import Image from 'next/image';
import intro  from './styles/profile.css';
import skils  from './styles/skils.css';
import Link from 'next/link';
import Head from 'next/head';
import Modal from 'react-modal';
import OtherHousesRoundedIcon from '@mui/icons-material/OtherHousesRounded';
import { useState } from 'react';
import Back from './Back';
type made={
  name:string;
  detail:string;
  gitlink:string;
}
type lang={
  langage:string;
  level:string;
  link:string;
}
const Skils: NextPage = () => {
  const [modalIsOpen,setModalIsOpen]=useState(false);
  const Skil:lang[]=[
    {
      langage:"C",
      level:"プログラミング演習で使用した。文法は問題ない。ポインタとアドレスでつまるところはあったが多分問題ないと思う。最近は全く使うことがない。",
      link:'/img/Clang.png',
    },
    {
      langage:"C++",
      level:"vectorとかあんまり使わないからよく分からないけどclassが使えるのはいいと思う！ライブラリとかまだよくわからないから使う時が来たら色々調べてみたい。",
      link:'/img/Cplus.png',
    },
    {
      langage:"python",
      level:"最近研究で使わせてもらってる。gurobiとpythonで最適化問題を解く際に使える。pythonはデータ解析にも役立つ言語でコンパクトに短く書けるのはいい。だがライブラリが多すぎで覚えられないのと型がどうなのかなど定義をしないので良く怒られて悩まされる。",
      link:'/img/python.png',
    },
    {
      langage:"Javascript",
      level:"DOM取得などその辺が悩まされたなって感じ。コードを書いているときにエラーが吐かれずあとあと、実行でバグを探すのが割とだるい。日付取得などまだ調べないとわからないものも多々ある。",
      link:'/img/js.png',
    },
    {
      langage:"Typescript",
      level:"型を覚えていないものが多いのでエラーと戦うことが多々。だけど、エラーを吐いてくれるから間違いに気付くことが増えて安心してコードを書けるので個人的には好き！JSをTSに書き換えるということについてはまだまだトレーニングが必要だ！",
      link:'/img/ts.png'
    },
    {
      langage:"php",
      level:"実験で使っただけでほとんど使用していない。配列の便利な機能等があった記憶があるがほぼ憶えていない。使うときが来たらちゃんと勉強しよｗ",
      link:'/img/php.png'
    },
    {
      langage:"Java",
      level:"ほんの少しだけ勉強した。classについての勉強を少ししたくらいで実際に内科作るといったことはしていない。Javaはよく企業で使われている言語なので勉強したいとは思っているが気が向いたときにでもやろうと思うｗ",
      link:'/img/java.png',
    },
    {
      langage:"html",
      level:"タグを全部覚えているわけではないがそこまで調べなくなった。たまに調べることはあるが結構かけるようになったと思われる。",
      link:'/img/html.png'
    },
    {
      langage:"css",
      level:"ググるランキング第1位。めっちゃ苦手意識がある。調べることは悪くないがその時間が長いので困る。関係ないがデザインセンスが0なのでどうにかしたいｗ",
      link:'/img/css.png'
    },
    {
      langage:"Nodejs",
      level:"動画を見ながら勉強したが応用しなかったので既にド忘れをした。この辺できるようになったらまた一つ世界が変わるのかもしれない。結構難しいと思った部分が多いのでじっくり時間があるときに勉強したい。",
      link:'/img/node.png',
    },
    {
      langage:"React",
      level:"ちょっと前まで使っていた。useStateといったReactHookについてはまだ勉強が必要かもしれない。実装も楽になったしとても感動した。",
      link:'/img/react.png',
    },
    {
      langage:"Nextjs",
      level:"このサイトも含めサイト作りは最近はこれを使っている。ページ推移が早いのと別のページが作るのが楽。最新のバージョンも更新されることが増えてきているので追いかけていきたいところ！",
      link:'/img/nextjs.png',
    },

  ]
  return (
      <div className={skils.content} id="intro">
        <Back/>
        <h1>経験技術(ほんの少しでも触ったものも含む)</h1>
        {Skil.map((item,index)=>(
          <div key={index} className={skils.box}>
            <figure className={skils.img}>
              <Image
                src={item.link}
                layout='fill' 
                alt='logo'
                className={skils.img}
              />
            </figure>
            <h2>{item.langage}</h2>
            <p>{item.level}</p>
          </div>
        ))}
     </div>
  )
}

export default Skils;