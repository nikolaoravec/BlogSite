import Link from "next/link";

function LongCard({ id, short_desc, date_created, title, image, slug }) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <Link href={"/posts/" + slug} key={id}>
      <div
        key={id}
        className="flex items-center justify-between w-full my-10 lg:my-8 xl:my-6"
      >
        <div className="flex flex-col lg:flex-row w-full items-start lg:items-center rounded bg-white shadow cursor-pointer hover:scale-105 hover:shadow-md transform transition duration-300 ease-out">
          <div className="w-full lg:w-1/5 h-64 dark:bg-gray-800">
            <img
              src={`http://localhost:8055/assets/${image}`}
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div
            className="w-full lg:w-4/5 h-64 dark:border-gray-700
         lg:h-64 border-t lg:border-t-0 lg:border-r lg:border-l lg:rounded-r 
        dark:bg-gray-700 bg-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-900 mt-5 mx-3">
              {/* <span className="absolute inset-0" /> */}
              {title}
            </h3>
            <div className="space-y-3">
              <p className=" mt-4 text-md text-gray-500 mx-3">
                {truncate(short_desc, 360)}
              </p>
              <p className="text-base text-gray-400 mx-3 ">
                {date_created?.substr(0, 10)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LongCard;
