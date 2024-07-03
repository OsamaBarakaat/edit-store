// components/ProductCard.tsx
import { FC } from "react";
import Image from "next/image";

interface ProductCardProps {
  imageUrl: any;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
}

const ProductCard: FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  originalPrice,
}) => {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={100}
          height={100}
          className="rounded-lg"
        />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="mt-2">
          <span className="text-lg font-bold text-black">{price}</span>
          <span className="ml-2 text-sm line-through text-gray-400">
            {originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
