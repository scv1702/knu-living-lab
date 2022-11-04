import addComma from "../utils/addComma";

type ProductDetailRowProps = {
  price: number;
  store: string;
  sale: string;
  one_plus_one: string;
};

const ProductDetailRow: React.FC<ProductDetailRowProps> = ({
  price,
  store,
  sale,
  one_plus_one,
}) => {
  return (
    <tr className="border-b">
      <td className="text-gray-900 px-6 py-4 whitespace-nowrap">{store}</td>
      <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
        {addComma(price)}원
      </td>
      <td className="text-gray-900 px-6 py-4 whitespace-nowrap">{sale}</td>
      <td className="text-gray-900 px-6 py-4 whitespace-nowrap">
        {one_plus_one}
      </td>
    </tr>
  );
};

export default ProductDetailRow;
