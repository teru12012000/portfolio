export type productionlink={
  link:string;
  width:string;
  height:string;
  title:string;
}

export type link={
  name:string;
  title:string;
}

export const weblink:link[]=[
  {
    name:"https://teru12012000.github.io/project/dirs/src/numeron.html",
    title:"Numeronのリンク",
  },
  {
    name:"https://job-hunting-report.vercel.app/",
    title:"就活レポート",
  }
]



export const minesweeper:productionlink[]=[
  {
    link:"/product_image/mine.jpg",
    width:"250px",
    height:"400px",
    title:"ゲーム進行中の画面(1)",
  },
  {
    link:"/product_image/mine3.jpg",
    width:"250px",
    height:"100px",
    title:"ゲーム進行中の画面(2)",
  },
]

export const numeron:productionlink[]=[]


export const numeronweb:productionlink[]=[
  {
    link:"/product_image/numeronweb2.jpg",
    width:"250px",
    height:"100px",
    title:"ゲームの画面",
  },
  {
    link:"/product_image/numeronweb.jpg",
    width:"250px",
    height:"100px",
    title:"クリア時の画面",
  },
]
export const jobhunting:productionlink[]=[
  {
    link:"/product_image/interview.jpg",
    width:"250px",
    height:"100px",
    title:"面接ページの画面",
  },
]
export const desktopapp:productionlink[]=[
  {
    link:"/product_image/desktop1.jpg",
    width:"250px",
    height:"200px",
    title:"Excelファイルはないが・・・",
  },
  {
    link:"/product_image/desktop2.jpg",
    width:"250px",
    height:"250px",
    title:"値を登録",
  },
  {
    link:"/product_image/desktop4.jpg",
    width:"250px",
    height:"200px",
    title:"Excelファイルができている！",
  },
  {
    link:"/product_image/desktop3.jpg",
    width:"250px",
    height:"100px",
    title:"Excelに記録されている！",
  },
]
export type carddeta={
  link:string;
  title:string;
  language:string;
}
export const titlePhoto:carddeta[]=[
  {
    link:"/product_image/mine2.jpg",
    title:"minesweeper",
    language:"C",
  },{
    link:"/product_image/cuinumeron.jpg",
    title:"numeron",
    language:"C++"
  },{
    link:"/product_image/numeronweb3.jpg",
    title:"numeron(web版)",
    language:"html,css,Javascript"
  },{
    link:"/product_image/jobhuntingweb1.jpg",
    title:"就活レポート",
    language:"Next.js(typescript),vanilla-extract"
  },{
    link:"/product_image/desktop2.jpg",
    title:"ランニング練習記録",
    language:"Python(Tkinter)"
  }
]