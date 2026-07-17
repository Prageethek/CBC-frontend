import { useEffect, useState } from "react";
import { sampleProducts } from "../../assets/products";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AdminProductPage() {
  const [products, setProducts] = useState(sampleProducts);

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/products",
      );
      console.log(response.data);
      setProducts(response.data);
    }
    getProducts();
  }, []);

  return (
    <div className="w-full h-full max-h-full border-10 border-red-600 overflow-y-scroll relative">
      <Link
        to="/admin/add-product"
        className=" absolute right-5 bottom-5 bg-green-500 text-2xl text-white  font-bold w-12 h-12  rounded text-center flex justify-center items-center"
      >
        +
      </Link>
      <table className="w-full text-center">
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Name</th>
            <th> Image</th>
            <th>Labelled Price</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.productId}</td>
              <td>{product.name}</td>
              <td>
                <img src={product.images[0]} className="w-[50px] h-[50px]" />
              </td>
              <td>{product.labelledPrice}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
