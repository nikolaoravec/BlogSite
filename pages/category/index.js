import Link from "next/link";
import CategoryCard from "../../components/CategoryCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Category({ categories }) {
  return (
    <div>
      <Header />

      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <p className="text-xl w-full text-center mb-5 shadow-sm pb-3">
          Category's
        </p>
        {/* <div className="border-b w-20 pt-1 mb-5 text" /> */}
        <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-3 gap-x-6 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8">
          {categories.data.map((category) => (
            <Link href={"/category/" + category.slug} key={category.id}>
              <a key={category.id} className="group cursor-pointer">
                <CategoryCard image={category.image} name={category.name} />
                {/* <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-6 xl:aspect-h-7">
                  <img
                    src={`http://localhost:8055/assets/${category.image}`}
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900 text-center">
                  {category.name}
                </h3> */}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const categories = await fetch("http://localhost:8055/items/categories").then(
    (res) => res.json()
  );
  // console.log(categories);
  return {
    props: {
      categories,
    },
  };
}
