import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import Header from "@/components/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Men from "@/assetss/men.jpg";
import Women from "@/assetss/image.jpg";
import Kids from "@/assetss/kids.jpg";
import Watch from "@/assetss/6166QQmf+YL._AC_UY1000_.jpg";
import Accessories from "@/assetss/accessories-make-or-break-1100x733.jpg";
import Sports from "@/assetss/lawn-tennis-sports-wear.jpg";
import fashoin1 from "@/assetss/fashoin1.jpg";
import fashoin2 from "@/assetss/fashoin2.webp";
import fashoin3 from "@/assetss/fashoin3.webp";
import fashoin4 from "@/assetss/fashoin4.jpg";

interface MidProps {
  setRightContent: (content: string) => void;
}

const Mid: React.FC<MidProps> = ({ setRightContent }) => {
  const carouselItems = [
    { id: 1, imageUrl: Men, title: "Men" },
    { id: 2, imageUrl: Women, title: "Women" },
    { id: 3, imageUrl: Kids, title: "Kids" },
    { id: 4, imageUrl: Watch, title: "Watch" },
    { id: 5, imageUrl: Accessories, title: "Accessories" },
    { id: 6, imageUrl: Sports, title: "Sports" },
  ];

  const products = [
    {
      id: 1,
      imageUrl: fashoin1,
      title: "Scuba Stand Collar Topper Jacket",
      description: "Zara provides only the highest-quality selection.",
      price: "KWD 12.00",
      originalPrice: "KWD 16.00",
    },
    {
      id: 2,
      imageUrl: fashoin2,
      title: "Regular Fit Crew-neck T-shirt",
      description:
        "Self-striped knitted midi A-line dress, has a scoop collar.",
      price: "KWD 12.30",
      originalPrice: "KWD 16.38",
    },
    {
      id: 3,
      imageUrl: fashoin3,
      title: "Hermes Carlton London",
      description:
        "Off-white self-striped knitted midi A-line dress has a scoop collar.",
      price: "KWD 15.00",
      originalPrice: "",
    },
    {
      id: 4,
      imageUrl: fashoin4,
      title: "Scuba Stand Collar Topper Jacket",
      description: "Zara provides only the highest-quality selection.",
      price: "KWD 12.00",
      originalPrice: "KWD 16.00",
    },
  ];

  return (
    <div className="m-4 max-h-screen overflow-auto">
      <div className="container mx-auto p-4">
        <div onClick={() => setRightContent("header")}>
          <Header />
        </div>

        <section className="mt-8 category">
          <h2 className="text-xl font-bold mb-4">Shop By Category</h2>
          <div className="flex justify-center items-center w-full">
            <Carousel className="w-full max-w-xs" opts={{ align: "start" }}>
              <CarouselContent>
                {carouselItems.map((item, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                    onClick={() => setRightContent("category")}
                  >
                    <CategoryCard imageUrl={item.imageUrl} title={item.title} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          className="mt-8 cursor-pointer"
          onClick={() => setRightContent("products")}
        >
          <div className="flex flex-col  gap-4">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                price={product.price}
                originalPrice={product.originalPrice}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Mid;
