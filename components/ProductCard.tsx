// components/ProductCard.tsx
import { FC } from "react";
import Image from "next/image";
import { StyleSettingsState } from "@/store/slices/styleSettings";

interface ProductCardProps {
  imageUrl: any;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  productsSettings: StyleSettingsState['products'];
}

const ProductCard: FC<ProductCardProps> = ({
  imageUrl,
  title,
  description,
  price,
  originalPrice,
  productsSettings
}) => {
  return (
    <div className="flex p-4 bg-white rounded-lg shadow-lg" style={{ backgroundColor: `${productsSettings.cardBackgroundColor}` }}>
      <div className="w-52 h-52">
        <Image
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full "
        />
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-semibold"
          style={{ color: `${productsSettings.itemNameColor}` }}
        >{title}</h4>
        {productsSettings.showItemDescription &&
          <p className="text-sm text-gray-500"
            style={{ color: `${productsSettings.itemDescriptionColor}` }}
          >{description}</p>
        }
        <div className="mt-2">
          <span className="text-lg font-bold text-black"
          style={{ color: `${productsSettings.itemPriceColor}` }}
          >{price}</span>
          <span className="ml-2 text-sm line-through text-gray-400">
            {originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
