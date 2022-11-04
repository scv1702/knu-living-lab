import ProductCard from "../../../components/ProductCard";
import type { Product } from "../../../types/Product";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { BodyLayout } from "../../../components/BodyLayout";
import Search from "../../../components/Search";

const ProductList: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [products, setProducts] = useState(Array<Product>);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/api/products/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, [category]);
  let _category = "";
  if (category === "food") {
    _category = "식품";
  } else if (category === "household") {
    _category = "생활 용품";
  } else if (category === "kitchen") {
    _category = "주방 용품";
  } else if (category === "hygiene") {
    _category = "위생 용품";
  }
  return (
    <>
      <BodyLayout>
        <Search option={_category} />
        <section className="mx-auto max-w-6xl py-4">
          <article className="flex flex-col lg:grid lg:grid-flow-row lg:grid-cols-2">
            {products &&
              products.map((product, index) => {
                return <ProductCard key={index} {...product} />;
              })}
          </article>
        </section>
      </BodyLayout>
    </>
  );
};

export default ProductList;
