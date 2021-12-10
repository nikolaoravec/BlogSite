import Link from "next/link";

function BlogCard({
  short_desc,
  date_created,
  title,
  image,
  author,
  slug,
  id,
}) {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
      <>
        <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
          <img
            src={`http://localhost:8055/assets/${image}`}
            className="w-full h-full object-center object-cover group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-1 text-lg font-medium text-gray-900">{title}</h3>
        <p className=" mt-4 text-md text-gray-700">
          {truncate(short_desc, 100)}
        </p>
        <p className=" mt-4 text-sm text-gray-400">Author: {author}</p>
        <p className=" mt-2 text-xs text-gray-400">
          {date_created.substr(0, 10)}
        </p>
      </>
  );
}

export default BlogCard;
