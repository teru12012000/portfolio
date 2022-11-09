import { NextPage } from "next";
import Head from "next/head";
import Back from "../components/Back";
import Header from "../components/Header";
import Subject from "../components/Subject";
import { one, three, two } from "../data/subjectdata";
import { thought } from "../data/thought";
import univerce from "../styles/univercity.css";

const University: NextPage = () => {
  return (
    <>
      <Head>
        <title>self-introduction</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Back/>
      <div className={univerce.content}>
        <h1>大学で学ぶこと</h1>
        <p>
          私は東京理科大学工学部情報工学科に所属しています。学年ごとに学ぶ科目と感想を述べていきたいと思います。なお、必修・選択必修・専門選択のみとします。
        </p>
        <Subject grade={'1年生'} subject={one} thought={thought[0]}/>
        <Subject grade={'2年生'} subject={two} thought={thought[1]}/>
        <Subject grade={'3年生'} subject={three} thought={thought[2]}/>
      </div>
    </>
  );
}

export default University;