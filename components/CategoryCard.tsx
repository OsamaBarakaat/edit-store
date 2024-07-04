import { FC } from "react";
import Image from "next/image";
import { StyleSettingsState } from "@/store/slices/styleSettings";

interface CategoryCardProps {
  imageUrl: any;
  title: string;
  categoriesSettings: StyleSettingsState['categories'];
}

const CategoryCard: FC<CategoryCardProps> = ({ imageUrl, title, categoriesSettings }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 ">
        <Image
          src={imageUrl}
          alt={title}
          width={192}
          height={192}
          className="object-cover w-full h-full"
          style={{
            borderRadius: `${categoriesSettings.categoryItemDesign ?
              categoriesSettings.categoryItemDesign === 'rounded' ? '50%'
                : '0.5rem'
              : '0.5rem'
              }`
            // borderRadius: '50%'
            // borderRadius: '0.5rem'
          }}
        />
      </div>
      {categoriesSettings.showCategoryItemName &&
        <h3 className="mt-2 text-center" style={{ color: categoriesSettings.itemNameColor || 'black' }}>{title}</h3>
      }
    </div>
  );
};

export default CategoryCard;
