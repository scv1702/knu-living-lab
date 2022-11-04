import { useRouter } from "next/router";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { BodyLayout } from "../../../../components/BodyLayout";
import ProductDetailRow from "../../../../components/ProductDetailRow";
import { Product } from "../../../../types/Product";
import addComma from "../../../../utils/addComma";
import SearchBar from "../../../../components/SearchBar";

const ProductDetail: NextPage = () => {
  const router = useRouter();
  const { category, name } = router.query;
  const [productDetails, setProductDetails] = useState(Array<Product>);
  useEffect(() => {
    fetch(`/api/products/${category}/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setProductDetails(data);
      });
  }, [name]);
  return (
    <BodyLayout>
      <div className="card mt-5">
        <figure>
          <img src={`/images/${name}.jpg`} width={300} height={300} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            최저가 {productDetails[0] && addComma(productDetails[0].price)}원 ~
            최고가{" "}
            {productDetails[productDetails.length - 1] &&
              addComma(productDetails[productDetails.length - 1].price)}
            원
          </p>
        </div>
      </div>
      <SearchBar />
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      가게명
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      가격
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      세일
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      1+1
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {productDetails.map((productDetail, index) => {
                    return <ProductDetailRow key={index} {...productDetail} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
};

export default ProductDetail;
