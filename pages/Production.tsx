import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import Product from "../components/product";
import production from "../components/styles/Product.css";
import { desktopapp, jobhunting, minesweeper, numeron, numeronweb, weblink } from "../data/product";
import Photolink from "../components/Photolink";
import Link from "next/link";

const Production:NextPage = () => {
  return (
    <div style={{margin:"200px auto"}}>
      <Head>
        <title>制作物</title>
        <meta name="description" content="私が作った制作物です。" />
      </Head>
      <Header/>
      <h1 className={production.h1}>制作物</h1>
      <Product title={'minesweeper(C言語)'} subtitle={['概要','プログラミングに慣れるきっかけになった','画像']} >
        <p>
          大学1年生の時にC言語の課題で作らされた。
          minesweeperはセルを1つずつ選択していき、
          地雷のあるセル以外を全て開けるゲームである。
        </p>
        <p>
        当時授業でやったときには理解が追い付かず友人に手伝ってもらった。
        しかし、春休みにもう一度実装した。今度はノーヒントで。配列の操作、
        for文、if文といった基本のところをこのminesweeperを通じて、完璧に
        理解していった。
      </p>
      <div className={production.photo}>
        <Photolink photo={minesweeper}/>
      </div>
      </Product>
      <Product title={'numeron(C++言語)'} subtitle={['概要','やろうと思った動機','GUIでも作りたいというきっかけに','画像']} >
        <p>
          大学2年生の冬休みに作ってみた。
          numeronは3桁、4桁の数字をヒントを当てるゲームである。
          C++言語を用いて書いてみた。
        </p>
        <p>
          大学の課題が終わってしまい、何か新しいことをやりたいと思い
          ふと作ってみようと思った。numeronは昔よく友達とやっていたため
          プログラムしたいと思った。
        </p>
        <p>
          今回は全てコマンドで操作するCUIだったが一般的に遊びやすくするために
          GUIにしたいと思った。numeronの実装自体はそこまで難しくないと思った。
          このあとのwebでのnumeron作成につながった制作物である。
        </p>
      <div className={production.photo}>
        <Photolink photo={numeron}/>
      </div>
      </Product>
      <Product title={'numeron(html,css,Javascript)'} subtitle={['概要','やろうと思った動機','よりwebを学びたいと思うようになった','画像']} >
        <p>
          大学3年生の冬に作ってみた。
          ルールは上記numeron(c++言語)と同じ。
          webアプリとして作成してみた。
          デザインに関しては、バイト先の後輩にやってもらった。
          初めての共同開発になった。
        </p>
        <p>
          ものづくりをして就活を有利にしたいと思ったのがきっかけ。
          形にしやすいのがwebだったのでwebを選択。numeronをGUIに
          したいということだったのでnumeronにした。
        </p>
        <p>
          できたものを友人に遊ばせとても好評だった。しかし、とある企業に見せたとき
          あまり良い評価をもらえなかった。とても悔しくてweb系の勉強をするきっかけになった。
          逆にものつくりに自主的に取り組んだことが評価され内定をいただいたのも事実である。
          入社する会社で活躍するためにもがんばろうと思った。
        </p>
      <div className={production.photo}>
        <Photolink photo={numeronweb}/>
      </div>
      </Product>
      <Product title={'就活レポート(Next.js)'} subtitle={['概要','やろうと思った動機','アップデートを重ねてより短いコードに','画像']}>
        <p>
          自分の就活の体験をもとに作ったレポート。
          インターン、選考について、面接などについて書いた。
        </p>
        <p>
          修士の先輩や後輩が就活に成功しいい企業に入社してほしいという思いで作った。
          Next.jsを勉強していたのでそれで書こうと思った。
          少しでも多くの人の役に立てればと思っている。
        </p>
        <p>
          最初は長いコードだったがReactのコンポーネントを利用してファイル数は多くなったが
          1つ1つのファイルのコードは短くなった。このサイト作成をきっかけにたくさんのことを学んだ。
          次はサイトではなく、webアプリを作成したいと思っている。
        </p>
      <div className={production.photo}>
        <Photolink photo={jobhunting}/>
      </div>
      </Product>
      
      <Product title={'ランニング練習記録(Python)'} subtitle={['概要','やろうと思った動機','はじめてのデスクトップアプリ、Pythonは優秀','画像']}>
        <p>
          Pythonのtkinterを使って作った。
          内容はその日のメニューを入力してExcelに記録するというもの。
          登録だけではなく削除もできるようにしてある。さらにExcelで距離の計算もできるようにプログラムした。
        </p>
        <p>
          webばっかりやってて少し別のことをしたいと思ってデスクトップアプリを作ろうと思った。
          陸上をやっていて自分の練習を簡単に記録できるものを作りたいと思い練習記録アプリを作ることにした。
        </p>
        <p>
          デスクトップアプリをちゃんと作ったのは初めてだがなんだか楽しかった。
          さらにPythonは優秀でExcel操作を楽にプログラムできてしまうことに感動。
          業務効率化プログラムはこのようにして作るのかと学んだ。
          そしてPythonは優秀であると改めて感じた。
        </p>
        <div className={production.photo}>
          <Photolink photo={desktopapp}/>
        </div>
      </Product>
      <div className={production.content}>
        <h1 className={production.h1}>web制作物のリンク</h1>
        {weblink.map((item,index)=>(
          <div key={index} className={production.link}>
            <Link href={item.name}>
              <a target="_blank" className={production.a}>{item.title}</a>
            </Link>
            <p>上記リンクをクリック！</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Production;