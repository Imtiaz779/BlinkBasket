import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrival = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollStart, setScrollStart] = useState(0);

    const newArrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Classic Hoodie",
      price: 95,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Classic Hoodie",
        },
      ],
    },
    {
      _id: "3",
      name: "Vintage T-Shirt",
      price: 45,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Vintage T-Shirt",
        },
      ],
    },
    {
      _id: "4",
      name: "Denim Jeans",
      price: 80,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Denim Jeans",
        },
      ],
    },
    {
      _id: "5",
      name: "Casual Sneakers",
      price: 110,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Casual Sneakers",
        },
      ],
    },
    {
      _id: "6",
      name: "Leather Boots",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=6",
          altText: "Leather Boots",
        },
      ],
    },
    {
      _id: "7",
      name: "Sports Shorts",
      price: 35,
      images: [
        {
          url: "https://picsum.photos/500/500?random=7",
          altText: "Sports Shorts",
        },
      ],
    },
    {
      _id: "8",
      name: "Cotton Shirt",
      price: 60,
      images: [
        {
          url: "https://picsum.photos/500/500?random=8",
          altText: "Cotton Shirt",
        },
      ],
    },
    {
      _id: "9",
      name: "Wool Sweater",
      price: 100,
      images: [
        {
          url: "https://picsum.photos/500/500?random=9",
          altText: "Wool Sweater",
        },
      ],
    },
    {
      _id: "10",
      name: "Formal Blazer",
      price: 180,
      images: [
        {
          url: "https://picsum.photos/500/500?random=10",
          altText: "Formal Blazer",
        },
      ],
    },
  ];

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
      return () => container.removeEventListener("scroll", updateScrollButtons);
    }
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Drag to scroll handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollStart(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollStart - walk;
  };

  return (
    <div>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        <div className="absolute right-0 bottom-[-32px] space-x-6 px-4 pb-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded border bg-white text-black disabled:opacity-50"
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-2 rounded border bg-white text-black disabled:opacity-50"
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto flex gap-4 px-4"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[260px] max-w-[260px] flex-shrink-0 bg-white rounded-lg shadow p-2 relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[300px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
