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
import Kids from "@/assetss/kids.jpg";
import Watch from "@/assetss/6166QQmf+YL._AC_UY1000_.jpg";
import Accessories from "@/assetss/accessories-make-or-break-1100x733.jpg";
import Sports from "@/assetss/lawn-tennis-sports-wear.jpg";
import fashoin1 from "@/assetss/fashoin1.jpg";
import fashoin2 from "@/assetss/fashoin2.webp";
import fashoin3 from "@/assetss/fashoin3.webp";
import fashoin4 from "@/assetss/fashoin4.jpg";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Autoplay from "embla-carousel-autoplay";

interface MidProps {
  setRightContent: (content: string) => void;
}

const Mid: React.FC<MidProps> = ({ setRightContent }) => {
  const bannerSettings = useSelector(
    (state: RootState) => state.styleSettings.banners
  );
  const categoriesSettings = useSelector(
    (state: RootState) => state.styleSettings.categories
  );
  const productsSettings = useSelector(
    (state: RootState) => state.styleSettings.products
  );

  const carouselItems = [
    { id: 1, imageUrl: Men, title: "Men" },
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
      cardType: "longwise",
    },
    {
      id: 2,
      imageUrl: fashoin2,
      title: "Regular Fit Crew-neck T-shirt",
      description:
        "Self-striped knitted midi A-line dress, has a scoop collar.",
      price: "KWD 12.30",
      originalPrice: "KWD 16.38",
      cardType: "crosswise",
    },
    {
      id: 3,
      imageUrl: fashoin3,
      title: "Hermes Carlton London",
      description:
        "Off-white self-striped knitted midi A-line dress has a scoop collar.",
      price: "KWD 15.00",
      originalPrice: "",
      cardType: "crosswise",
    },
    {
      id: 4,
      imageUrl: fashoin4,
      title: "Scuba Stand Collar Topper Jacket",
      description: "Zara provides only the highest-quality selection.",
      price: "KWD 12.00",
      originalPrice: "KWD 16.00",
      cardType: "longwise",
    },
  ];

  return (
    <div className="m-4 max-h-screen overflow-auto">
      <div className="container mx-auto p-4">
        {bannerSettings.show ? (
          <div
            onClick={() => setRightContent("header")}
            className="cursor-pointer"
          >
            <Header bannerSettings={bannerSettings} />
          </div>
        ) : (
          <div>Hidden banner</div>
        )}
        {categoriesSettings.show ? (
          <section className="mt-8 category cursor-pointer w-full">
            {categoriesSettings.showTitle && (
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: categoriesSettings.titleColor || "black" }}
              >
                {categoriesSettings.title}
              </h2>
            )}
            <div className="relative w-full ">
              <Carousel
                className="w-full"
                opts={{ align: "start", loop: true }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                    stopOnMouseEnter: true,
                  }),
                ]}
              >
                <CarouselContent>
                  {carouselItems.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                      onClick={() => setRightContent("category")}
                    >
                      <CategoryCard
                        imageUrl={item.imageUrl}
                        title={item.title}
                        categoriesSettings={categoriesSettings}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-12" />
                <CarouselNext className="absolute right-0 top-12" />
              </Carousel>
            </div>
          </section>
        ) : (
          <div>Hidden categories</div>
        )}
        {productsSettings.show ? (
          <section
            className="mt-8 cursor-pointer"
            onClick={() => setRightContent("products")}
          >
            {productsSettings.showTitle && (
              <h2
                className="text-xl font-bold mb-4"
                style={{ color: productsSettings.titleColor || "black" }}
              >
                {productsSettings.title}
              </h2>
            )}
            <div className="flex flex-col  gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  imageUrl={product.imageUrl}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  productsSettings={productsSettings}
                />
              ))}
            </div>
          </section>
        ) : (
          <div>Hidden products</div>
        )}
      </div>
    </div>
  );
};

export default Mid;
