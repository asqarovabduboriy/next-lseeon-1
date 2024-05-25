import Category from "@/components/category/Category";
import Main from "@/components/main/Main";
import Product from "@/components/product/Product";

async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=9");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  const data = await getData();
  console.log(data);
  return (
    <>
      <Main />
      <Product data={data} />
      <Category />
    </>
  );
};

export default Home;
