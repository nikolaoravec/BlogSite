import Header from "../../components/Header";
import LongCard from "../../components/LongCard";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:8055/items/categories");
  const data = await res.json();
  // console.log(data.data);

  const paths = data.data.map((category) => {
    return {
      params: { slug: category.slug },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const category = await fetch(
    `http://localhost:8055/items/categories?filter[slug][_eq]=${slug}`
  ).then((res) => res.json());

  const posts = category.data[0].posts;
  var newJSON = [];
  newJSON.pop();
  for (let i = 0; i < posts.length; i++) {
    const postID = posts[i];
    const postJSON = await fetch(
      `http://localhost:8055/items/posts?filter[id][_eq]=${postID}`
    ).then((res) => res.json());

    newJSON.push(postJSON.data[0]);
  }
  console.log(newJSON);
  return {
    props: { category, newJSON },
  };
};

function CategoryPost({ newJSON, category }) {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-center text-gray-700 text-4xl">
          {category.data[0].name}
        </h1>
        {newJSON.map((post) => (
          <LongCard
            id={post.id}
            short_desc={post.short_desc}
            date_created={post.date_created}
            title={post.title}
            image={post.image}
            slug={post.slug}
          />
        ))}
      </div>
    </>
  );
}

export default CategoryPost;
