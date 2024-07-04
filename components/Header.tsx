// components/Header.tsx
import Image from "next/image";
import { StyleSettingsState } from "@/store/slices/styleSettings";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import images from "@/assetss/images.jpg";
import images2 from "@/assetss/banner-1.webp";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface HeaderProps {
  bannerSettings: StyleSettingsState["banners"];
}

const Header: React.FC<HeaderProps> = ({ bannerSettings }) => {
  const buttonStyles = {
    color: bannerSettings.buttonColor ? bannerSettings.buttonColor : "white",
    border: `1px solid ${
      bannerSettings.buttonColor ? bannerSettings.buttonColor : "white"
    }`,
    "&:hover": {
      backgroundColor: "transparent",
      color: "inherit",
      borderColor: "inherit",
    },
  };

  return (
    <div className="carousel w-full">
      <Swiper
        pagination={{
          dynamicBullets: false,
          clickable: true,
        }}
        spaceBetween={30}
        loop={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="flex justify-center">
            <SwiperSlide key={index} className="px-1.5 md:px-2.5 xl:px-3.5">
              <div className="w-full h-full max-h-[170px] overflow-hidden flex justify-center rounded-md">
                <div className="relative w-full">
                  <img
                    src={images.src}
                    // src=''
                    alt="Up to 60% Off"
                    className="rounded-lg w-full"
                  />
                  <div
                    className={`
      absolute inset-0 flex flex-col justify-center rounded-lg
        ${bannerSettings.showBgOverlay ? "bg-black bg-opacity-50" : ""}
        
        ${
          bannerSettings.locations
            ? `items-${bannerSettings.locations}`
            : "items-center"
        }
        `}
                  >
                    {bannerSettings.showTitle && (
                      <h1
                        className="text-2xl font-bold text-center px-4 "
                        style={{
                          color: bannerSettings.titleColor
                            ? bannerSettings.titleColor
                            : "white",
                        }}
                      >
                        Up to 60% Off
                      </h1>
                    )}
                    {bannerSettings.showDescription && (
                      <h3
                        className="text-l font-medium text-center px-4 pt-4"
                        style={{
                          color: bannerSettings.descriptionColor
                            ? bannerSettings.descriptionColor
                            : "white",
                        }}
                      >
                        For all travel bages
                      </h3>
                    )}
                    {bannerSettings.showButton && (
                      <Button
                        className="mx-4 mt-4 mb-4 rounded-none bg-transparent hover:bg-transparent text-white border"
                        style={buttonStyles}
                      >
                        Shop Now
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;
