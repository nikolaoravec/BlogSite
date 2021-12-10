function CategoryCard({ image, name }) {
  return (
    <>
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-6 xl:aspect-h-7">
        <img
          src={`http://localhost:8055/assets/${image}`}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-1 text-lg font-medium text-gray-900 text-center">
        {name}
      </h3>
    </>
  );
}

export default CategoryCard;
