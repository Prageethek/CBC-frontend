import { useState } from "react";
import mediaUpload from "../../utils/mediaUpload";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function AddProductPage() {
  const [productId, setProductId] = useState("");
  const [name, setName] = useState("");
  const [altNames, setAltNames] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [labelledPrice, setLabelledPrice] = useState(0);
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  let imageUrls;
  async function addProduct() {
    if (images.length <= 0) {
      toast.error("You should enter at least one image");
      return;
    }

    const promiseArray = [];

    for (let i = 0; i < images.length; i++) {
      promiseArray[i] = mediaUpload(images[i]);
    }
    try {
      imageUrls = await Promise.all(promiseArray);
      console.log(imageUrls);
    } catch (e) {
      console.log(e);
    }

    const product = {
      productId: productId,
      name: name,
      altNames: altNamesArray,
      images: imageUrls,
      description: description,
      labelledPrice: labelledPrice,
      price: price,
      stock: stock,
    };
    console.log(product);

    handleAddProduct(product);
  }

  const altNamesArray = altNames.split(",");
  const token = localStorage.getItem("token");
  if (!token) {
    toast.error("You should login first");
    return;
  }

  async function handleAddProduct(product) {
    console.log("product====>", product);

    try {
      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/products/",
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
      toast.success(res.data.message);
    } catch (e) {
      toast.error("Failed to add product");
      console.log("Message =", e.response?.data?.message);
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
      <div className="w-[400px] h-[500px] flex flex-col border-2 border-gray-300  items-center justify-center gap-2">
        <input
          className="input input-bordered"
          type="text"
          placeholder="Product Id"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Alt Names"
          value={altNames}
          onChange={(e) => setAltNames(e.target.value)}
        />
        <input
          type="file"
          placeholder="images"
          multiple
          onChange={(e) => setImages(e.target.files)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Labelled Price"
          value={labelledPrice}
          onChange={(e) => setLabelledPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="text"
          placeholder="stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <div className="flex flex-row justify-center items-center mt-4 gap-4">
          <button
            onClick={addProduct}
            className=" bg-blue-300 w-[120px] h-[40px] rounded-4xl text-white cursor-pointer font-bold"
          >
            Add Product
          </button>
          <Link
            to="/admin/products"
            className=" bg-red-500  text-white font-bold  w-20 h-12  rounded-3xl text-center flex justify-center items-center"
          >
            cancel
          </Link>
        </div>
      </div>
    </div>
  );
}
