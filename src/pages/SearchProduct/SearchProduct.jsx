import React, { useContext } from "react";
import ProductPageSlider from "./ProductPageSlider/ProductPageSlider";
import img1 from "../../assets/products/product-01.png";
import img2 from "../../assets/products/product-02.png";
import img3 from "../../assets/products/product-03.png";
import img4 from "../../assets/products/product-04.png";
import { BlurContext } from "../../Context/SetBlur";

const products = [
  {
    name: "Carrot",
    price: 30.5,
    quantify: 1,
    img: img1,
  },
  {
    name: "Carrot",
    price: 30.5,
    quantify: 1,
    img: img2,
  },
  {
    name: "Carrot",
    price: 30.5,
    quantify: 1,
    img: img3,
  },
  {
    name: "Carrot",
    price: 30.5,
    quantify: 1,
    img: img4,
  },
];

const SearchProduct = () => {
  const { blur } = useContext(BlurContext);
  return (
    <div className={`${blur ? "blur-sm" : undefined}`}>
      <div className="relative">
        <svg
          className="absolute "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFF0C9"
            fillOpacity="1"
            d="M0,224L48,229.3C96,235,192,245,288,229.3C384,213,480,171,576,176C672,181,768,235,864,240C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <div className="">
          <ProductPageSlider />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center mx-4">
          <p className="text-lg font-bold w-1/4">1406 stores</p>
          <ul className="flex w-3/4 justify-between text-sm items-center">
            <li>Relevance</li>
            <li>Rating</li>
            <li>Delivery Time</li>
            <li>Cost: Low To High</li>
            <li>Cost: High To Low</li>
          </ul>
        </div>
        <hr className="border border-gray-300" />
        <div className="grid grid-cols-4 gap-4 py-14">
          {products.map((product, i) => (
            <div
              key={i}
              className="border shadow-sm rounded-md shadow-red-400 flex flex-col items-center"
            >
              <img className="w-52 h-40" src={product.img} alt="" />
              <div className="flex justify-evenly w-full items-center py-2">
                <div className="text-base font-bold flex flex-col items-start">
                  <h3>{product.name}</h3>
                  <h3>{product.quantify} kg</h3>
                  <h3>{product.price}/-</h3>
                </div>
                <div className="flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-blue-200"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
