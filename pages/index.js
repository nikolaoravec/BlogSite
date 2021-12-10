import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LongCard from "../components/LongCard";

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
        "http://localhost:8055/items/posts?filter[featured][_eq]=true&sort=sort,-date_created&limit=12"
      );
      // console.log(request.data.data);
      setPosts(request.data.data);
    }
    fetchData();
    fetchBlogData();
  }, []);

  // console.log(posts);

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
            <Link href={"/posts/" + post.slug} key={post.id}>
              <div key={post.id} className="group cursor-pointer">
                <BlogCard
                  short_desc={post.short_desc}
                  date_created={post.date_created}
                  title={post.title}
                  image={post.image}
                  author={post.author}
                  slug={post.slug}
                  id={post.id}
                />
              </div>
            </Link>
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
