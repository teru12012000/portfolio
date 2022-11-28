export type link={
  link:string;
  title:string;
  target:string;
}

export type Headlink={
  link:string;
  title:string;
  detail:string;
}


export const linkname:link[]=[
  {
    link:"/myintro",
    title:"プロフィール",
    target:"",
  },
  {
    link:"/univercity",
    title:"大学",
    target:"",
  },
  {
    link:"/myskil",
    title:"スキル",
    target:"",
  },
  {
    link:"https://blog-phi-nine-26.vercel.app/",
    title:"blog(外部リンク)",
    target:"_blank",
  },
  {
    link:"/running",
    title:"ランニング",
    target:"",
  },
  {
    link:"/Production",
    title:"制作物",
    target:"",
  },
]

export const twitterName:link[]=[
  {
    link:"https://twitter.com/s1i2o0n1",
    title:"run,日常垢",
    target:"_blank",
  },
  {
    link:"https://twitter.com/TERUSI1201",
    title:"技術用垢",
    target:"_blank",
  }
]

export const headerlinkName:Headlink[]=[
  {
    link:"https://github.com/teru12012000",
    title:"My github",
    detail:"Go TERUSI github",
  },
  {
    link:"https://twitter.com/s1i2o0n1",
    title:"run,日常垢",
    detail:"Go TERUSI twitter",
  },
  {
    link:"https://twitter.com/TERUSI1201",
    title:"技術用垢",
    detail:"Go TERUSI twitter",
  }
]

export const twitteraccountcoment:string='連絡の際はどちらのアカウントでも構いません。';