import React from "react";
import Banner from "@/components/RightSection/Banner";
import Categories from "@/components/RightSection/Categories";
import Products from "@/components/RightSection/Products";

interface RightProps {
  content: string;
}

const Right: React.FC<RightProps> = ({ content }) => {
  let cardContent;

  switch (content) {
    case "header":
      cardContent = <Banner />
      break;

    case "category":
      cardContent = <Categories />
      break;

    case "products":
      cardContent = <Products />
      break;

    default:
      cardContent = (
        <div className="p-6 bg-white shadow-md rounded-lg">
          Select a section to configure its settings.
        </div>
      );
  }

  return <div className="m-4">{cardContent}</div>;
};

export default Right;
