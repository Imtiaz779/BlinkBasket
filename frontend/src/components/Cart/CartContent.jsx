import React from "react";
import {RiDeleteBin3Line} from "react-icons/ri"

const CartContent = () => {
  const cartproducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "Jeans",
      size: "32",
      color: "Blue",
      quantity: 2,
      price: 40,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "Sneakers",
      size: "9",
      color: "White",
      quantity: 1,
      price: 60,
      image: "https://picsum.photos/200?random=3",
    },
    {
      productId: 4,
      name: "Jacket",
      size: "L",
      color: "Black",
      quantity: 1,
      price: 75,
      image: "https://picsum.photos/200?random=4",
    },
  ];

  return (
    <div>
      {cartproducts.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>

            </div>

          </div>
          <div>
                <p>$ {product.price.toLocaleString()}</p>
                <button>
                        <RiDeleteBin3Line className="w-6 h-6 mt-2 text-red-600"/>
                </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
