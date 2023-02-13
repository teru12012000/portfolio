import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { productdata } from "../../data/productdeta";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { client } from "../../lib/client";
import Head from "next/head";
import Header from "../../components/Header";
type Props={
  product:productdata
}

export const getStaticPaths:GetStaticPaths<Params>=async () => {
  const deta=await client.get({endpoint:'terusi-product'})
  const paths=deta.contents.map((content:productdata)=>(`/Product/${content.id}`))

  return {
    paths,
    fallback:false
  }
}

export const getStaticProps:GetStaticProps<Props,Params>=async(context)=>{
  const id=context.params?.id;
  const deta=await client.get({
    endpoint:"terusi-product",
    contentId:id,
  });
  return {
    props:{
      product:deta,
    }
  }
}

const Product:NextPage<Props>= ({product}) => {
  
  return (
    <>
      <Head>
        <title>{`制作物：${product.title}`}</title>
        <meta name="description" content={`制作物で作った${product.title}についてです`} />
      </Head>
      <Header open={"flex"}/>
      <div 
        className="container text-center"
        style={{
          marginTop:"200px"
        }}
      >
        <h1 className="mb-5">{product.title}</h1>
        <div className="border rounded border-dark" style={{fontSize:"20px"}} dangerouslySetInnerHTML={{__html:`${product.detail}`}}></div>
      </div>
    </>
  );
}

export default Product;