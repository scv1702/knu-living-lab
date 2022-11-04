import Link from "next/link";
import addComma from "../utils/addComma";
import { Product } from "../types/Product";

const ProductCard: React.FC<Product> = (product: Product) => {
  let category = "";
  if (product.category === "food") {
    category = "식품";
  } else if (product.category === "household") {
    category = "생활 용품";
  } else if (product.category === "kitchen") {
    category = "주방 용품";
  } else if (product.category === "hygiene") {
    category = "위생 용품";
  }
  return (
    <section className="mx-auto flex w-full cursor-pointer flex-col gap-1 border-gray-100 p-2">
      <div className="mx-auto w-full max-w-2xl overflow-hidden rounded-lg px-6 py-4 transition-colors duration-300 hover:bg-gray-100">
        <img
          className="float-left mr-5"
          src={`/images/${product.name}.jpg`}
          width={100}
          height={100}
        />
        <div>
          {product.manufacturer}
          <h2 className="card-title">
            <Link
              href={{
                pathname: "/products/[category]/[name]",
                query: { name: product.name, category: product.category },
              }}
            >
              {product.name.length >= 20
                ? product.name.substr(0, 20) + "..."
                : product.name}
            </Link>
          </h2>
          <p className="text-xl font-semibold text-lime-600">
            {addComma(product.price)}원 ~
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
