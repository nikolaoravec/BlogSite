import Image from "next/image";

function Banner({ img }) {
  const apiImg = `http://localhost:8055/assets/${img}`;
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image src={apiImg} layout="fill" objectFit="cover" />
      <div className="absolute top-1/3 w-full text-center">
        <h1 className="text-2xl sm:text-5xl my-3 text-white">
          Blog is a place to write, read, and connect
        </h1>
        <p className="text-md sm:text-lg text-white">
          It's easy and free to post your thinking on any topic and connect with
          millions of readers.
        </p>
        <button className="text-gray-900 bg-white px-10 py-4 shadow-md rounded-full cursor-pointer font-bold my-3 hover:shadow-xl hover:bg-gray-200 active:scale-90 transition duration-150 ">
          Start writing
        </button>
      </div>
    </div>
  );
}

export default Banner;
