import axios from "axios";
import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  const [banner, setBanner] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "http://localhost:8055/items/banners?filter[published][_eq]=true"
      );
      // console.log(request.data.data.length);
      setBanner(
        request.data.data[Math.floor(Math.random() * request.data.data.length)]
          .image
      );
    }
    async function fetchBlogData() {
      const request = await axios.get(
        "http://localhost:8055/items/posts?filter[featured][_eq]=true&sort=sort,-date_created"
      );
      // console.log(request.data.data);
      setPosts(request.data.data);
    }
    fetchData();
    fetchBlogData();
  }, []);

  console.log(posts);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      {/* Banner */}
      <Banner img={banner} />

      {/* Featured blogs 3 x 4 (Cards) */}
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-xl w-full text-center mb-5 shadow-sm">Blog Posts</p>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {posts.map((post) => (
            <a key={post.id} className="group cursor-pointer">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={`http://localhost:8055/assets/${post.image}`}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-1 text-lg font-medium text-gray-900">
                {post.title}
              </h3>
              <p className=" mt-4 text-md text-gray-700">
                {truncate(post.short_desc, 100)}
              </p>
              <p className=" mt-4 text-sm text-gray-400">
                Author: {post.author}
              </p>
              <p className=" mt-2 text-xs text-gray-400">
                {post.date_created.substr(0, 10)}
              </p>
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
export async function getStaticProps() {
  const blogBanner = await fetch("http://localhost:8055/items/banners").then(
    (res) => res.json()
  );
  return {
    props: {
      blogBanner,
    },
  };
}
