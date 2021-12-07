function BlogCard({ id, short_desc, date_created, title, image }) {
  return (
    <div key={id} className="group relative">
      <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={image} className="w-full h-full object-center object-cover" />
      </div>
      <h3 className="mt-6 text-sm text-gray-500">
        <span className="absolute inset-0" />
        {title}
      </h3>
      <p className="text-base font-semibold text-gray-900">{short_desc}</p>
      <p className="text-base text-gray-900">{date_created}</p>
      {/* <p className="text-base text-gray-900">{author}</p> */}
    </div>
  );
}

export default BlogCard;
