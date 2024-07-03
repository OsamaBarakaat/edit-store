// components/Header.tsx
import Image from "next/image";
import images from "@/assetss/images.jpg";

const Header = () => {
  return (
    <div className="relative">
      <Image
        src={images}
        alt="Frequently Asked Questions"
        layout="responsive"
        height={500}
        width={1000}
        className="rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-white text-2xl sm:text-4xl font-bold font-serif text-center">
          Frequently Asked Questions
        </h1>
      </div>
    </div>
  );
};

export default Header;
