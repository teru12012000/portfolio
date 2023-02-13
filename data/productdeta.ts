export type productdata={
  id: string;
  createdAt: string,
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  detail: string;
  image: {
      url: string
      height: number,
      width: number
  },
  language: string;
}