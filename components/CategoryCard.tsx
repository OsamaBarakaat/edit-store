import { FC } from "react";
import Image from "next/image";

interface CategoryCardProps {
  imageUrl: any;
  title: string;
}

const CategoryCard: FC<CategoryCardProps> = ({ imageUrl, title }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 ">
        <Image
          src={imageUrl}
          alt={title}
          width={192}
          height={192}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>
      <h3 className="mt-2 text-center">{title}</h3>
    </div>
  );
};

export default CategoryCard;
