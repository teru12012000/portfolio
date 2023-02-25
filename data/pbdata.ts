export type best={
  distance:string;
  time:string;
}
export type goaldata={
  goal:string;
  detail:string;
}
export  const mybest:best[]=[
  {
    distance:'1500m',
    time:'4分17秒',
  },
  {
    distance:'5000m',
    time:'15分44秒',
  },
  {
    distance:'10000m',
    time:'33分25秒',
  },
  {
    distance:'ハーフマラソン',
    time:'76分11秒',
  },
]

export const goal:goaldata[]=[
  {
    goal:'常に自己ベストを狙う',
    detail:'これから社会人となりますが自己ベストは常に狙っていこうと思っています。限界を迎えるまで全力で頑張ります。'
  },
  {
    goal:'走ることを楽しむ',
    detail:'もともと、走ることが楽しくて陸上を始めました。楽しまずして良い記録は出ないと思っています。ジョグも含めて日頃の練習を楽しんでいきたいと思います。'
  }


]