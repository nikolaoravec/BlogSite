import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Home({ post }) {
  const [postRead, setPostRead] = useState(post.data[0]);

  return (
    <div>
      {console.log(postRead)}
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 text-center">
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              {/* TITLE */}
              {postRead.title}
              {/* WooCommerce Turns 10: Top Features of the E-commerce Plugin */}
            </h1>
            <p className="font-normal text-base leading-6 text-gray-600 ">
              {/* TEXT */}
              {postRead.content}
            </p>
          </div>
          <div className="w-full lg:w-8/12 ">
            <img
              className="w-full object-center object-cover"
              src={`http://localhost:8055/assets/${postRead.image}`}
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
// export async function getServerSideProps() {
//   const posts = await fetch("http://localhost:8055/items/posts").then((res) =>
//     res.json()
//   );

//   return {
//     props: {
//       posts,
//     },
//   };
// }

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8055/items/posts");
  const data = await res.json();
  // console.log(data.data);

  const paths = data.data.map((post) => {
    return {
      params: { slug: post.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const post = await fetch(
    `http://localhost:8055/items/posts?filter[slug][_eq]=${slug}`
  ).then((res) => res.json());

  // console.log(postJson);
  return {
    props: { post },
  };
};
