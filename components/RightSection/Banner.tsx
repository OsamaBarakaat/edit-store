import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateBanners } from "@/store/slices/styleSettings";

const Banner: React.FC = () => {
  const dispatch = useDispatch()
  const bannerSettings = useSelector((state: RootState) => state.styleSettings.banners);
  return (
    <div className="m-4">
      <div className="bg-white shadow-md rounded-lg">
        <div className="grid gap-4">
          <div className="flex items-center space-x-2 pt-6">
            <label
              htmlFor="rounded"
              className="text-xl font-medium text-gray-700 px-6"
            >
              Banners Settings
            </label>
          </div>
          <Separator />
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rounded"
                checked={bannerSettings.show}
                onCheckedChange={() => {
                  dispatch(updateBanners({ show: !(bannerSettings.show) }));
                }}
              />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Show Banner
              </label>
            </div>

            {bannerSettings.show && <>
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={bannerSettings.showBgOverlay}
                  onCheckedChange={() => {
                    dispatch(updateBanners({ showBgOverlay: !(bannerSettings.showBgOverlay) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Background Overlay
                </label>
              </div>
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={bannerSettings.showTitle}
                  onCheckedChange={() => {
                    dispatch(updateBanners({ showTitle: !(bannerSettings.showTitle) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Title
                </label>
              </div>
              {bannerSettings.showTitle &&
                <div className="flex justify-between items-center space-x-2">
                  <label
                    htmlFor="text-color"
                    className="text-sm font-medium text-gray-700 whitespace-nowrap"
                  >
                    Title Color:
                  </label>
                  <Input
                    type="color"
                    id="text-color"
                    className="w-25"
                    value={bannerSettings.titleColor || ''}
                    onChange={(e: any) => {
                      dispatch(updateBanners({ titleColor: e.target.value }));
                    }}
                  />
                </div>
              }
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={bannerSettings.showDescription}
                  onCheckedChange={() => {
                    dispatch(updateBanners({ showDescription: !(bannerSettings.showDescription) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Description
                </label>
              </div>
              {bannerSettings.showDescription &&
                <div className="flex justify-between items-center space-x-2">
                  <label
                    htmlFor="text-color"
                    className="text-sm font-medium text-gray-700 whitespace-nowrap"
                  >
                    Description Color:
                  </label>
                  <Input
                    type="color"
                    id="text-color"
                    className="w-25"
                    value={bannerSettings.descriptionColor || ''}
                    onChange={(e: any) => {
                      dispatch(updateBanners({ descriptionColor: e.target.value }));
                    }}
                  />
                </div>
              }
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={bannerSettings.showButton}
                  onCheckedChange={() => {
                    dispatch(updateBanners({ showButton: !(bannerSettings.showButton) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Button
                </label>
              </div>

              {bannerSettings.showButton &&
                <div className="flex justify-between items-center space-x-2">
                  <label
                    htmlFor="text-color"
                    className="text-sm font-medium text-gray-700 whitespace-nowrap"
                  >
                    Button Color:
                  </label>
                  <Input
                    type="color"
                    id="text-color"
                    className="w-25"
                    value={bannerSettings.buttonColor || ''}
                    onChange={(e: any) => {
                      dispatch(updateBanners({ buttonColor: e.target.value }));
                    }}
                  />
                </div>
              }
              <Separator />
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="items"
                  className="text-sm font-medium text-gray-700"
                >
                  Data Location
                </label>
                <Select
                  value={bannerSettings.locations || undefined}
                  onValueChange={(value: string | undefined) => {
                    dispatch(updateBanners({ locations: value || null }));
                  }}
                >
                  <SelectTrigger className="w-100">
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="start">Start</SelectItem>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="end">End</SelectItem>
                  </SelectContent>
                </Select>
              </div>

            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
