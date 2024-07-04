// components/Header.tsx
import Image from "next/image";
import images from "@/assetss/images.jpg";
import { StyleSettingsState } from "@/store/slices/styleSettings";
import { Button } from "./ui/button";

interface HeaderProps {
  bannerSettings: StyleSettingsState['banners'];
}

const Header: React.FC<HeaderProps> = ({ bannerSettings }) => {
  const buttonStyles = {
    color: bannerSettings.buttonColor ? bannerSettings.buttonColor : 'white',
    border: `1px solid ${bannerSettings.buttonColor ? bannerSettings.buttonColor : 'white'}`,
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'inherit',
      borderColor: 'inherit',
    },
  };

  return (
    <div className="relative">
      <Image
        src={images}
        // src=''
        alt="Up to 60% Off"
        layout="responsive"
        height={500}
        width={1000}
        className="rounded-lg"
      />
      <div className={`
      absolute inset-0 flex flex-col justify-center rounded-lg 
        ${bannerSettings.showBgOverlay ? 'bg-black bg-opacity-50' : ''}
        
        ${bannerSettings.locations ?
          `items-${bannerSettings.locations}`
          : 'items-center'
        }
        `
        }>
        {bannerSettings.showTitle &&
          <h1 className="text-2xl font-bold text-center px-4 "
            style={{ color: bannerSettings.titleColor ? bannerSettings.titleColor : 'white' }}>
            Up to 60% Off
          </h1>
        }
        {bannerSettings.showDescription &&
          <h3 className="text-l font-medium text-center px-4 pt-4"
            style={{ color: bannerSettings.descriptionColor ? bannerSettings.descriptionColor : 'white' }}>
            For all travel bages
          </h3>
        }
        {bannerSettings.showButton &&
          <Button className="mx-4 mt-4 rounded-none bg-transparent hover:bg-transparent text-white border"
            style={buttonStyles}>
            Shop Now
          </Button>
        }
      </div>
    </div>
  );
};

export default Header;
