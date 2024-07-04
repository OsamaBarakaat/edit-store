import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateProducts } from "@/store/slices/styleSettings";

const Products: React.FC = () => {
  const dispatch = useDispatch()
  const productsSettings = useSelector((state: RootState) => state.styleSettings.products);
  return (
    <div className="m-4">
      <div className="bg-white shadow-md rounded-lg">
        <div className="grid gap-4">
          <div className="flex items-center space-x-2 pt-6">
            <label
              htmlFor="rounded"
              className="text-xl font-medium text-gray-700 px-6"
            >
              Products Settings
            </label>
          </div>
          <Separator />
        </div>
        <div className="p-6">
          <div className="grid gap-4">

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rounded"
                checked={productsSettings.show || false}
                onCheckedChange={() => {
                  dispatch(updateProducts({ show: !(productsSettings.show) }));
                }}
              />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Show Products
              </label>
            </div>

            {productsSettings.show && <>
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={productsSettings.showTitle}
                  onCheckedChange={() => {
                    dispatch(updateProducts({ showTitle: !(productsSettings.showTitle) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Section Title
                </label>
              </div>
              {productsSettings.showTitle &&
                <>
                  <div className="flex justify-between items-center space-x-2">
                    <label
                      htmlFor="text-color"
                      className="text-sm font-medium text-gray-700 whitespace-nowrap"
                    >
                      Title:
                    </label>
                    <Input
                      id="text"
                      className="w-25"
                      value={productsSettings.title || ''}
                      onChange={(e: any) => {
                        dispatch(updateProducts({ title: e.target.value }));
                      }}
                    />
                  </div>
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
                      value={productsSettings.titleColor || ''}
                      onChange={(e: any) => {
                        dispatch(updateProducts({ titleColor: e.target.value }));
                      }}
                    />
                  </div>
                </>
              }
              <Separator />
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="items"
                  className="text-sm font-medium text-gray-700"
                >
                  Card Design
                </label>
                <Select
                  value={productsSettings.cardDesign || undefined}
                  onValueChange={(value: string | undefined) => {
                    dispatch(updateProducts({ cardDesign: value || null }));
                  }}
                >
                  <SelectTrigger className="w-100">
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="longwise">Longwise</SelectItem>
                    <SelectItem value="crosswise">Crosswise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-between items-center space-x-2">
                <label
                  htmlFor="text-color"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Card Background Color:
                </label>
                <Input
                  type="color"
                  id="text-color"
                  className="w-25"
                  value={productsSettings.cardBackgroundColor || ''}
                  onChange={(e: any) => {
                    dispatch(updateProducts({ cardBackgroundColor: e.target.value }));
                  }}
                />
              </div>
              <div className="flex justify-between items-center space-x-2">
                <label
                  htmlFor="text-color"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Product Name Color:
                </label>
                <Input
                  type="color"
                  id="text-color"
                  className="w-25"
                  value={productsSettings.itemNameColor || ''}
                  onChange={(e: any) => {
                    dispatch(updateProducts({ itemNameColor: e.target.value }));
                  }}
                />
              </div>
              <Separator />
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rounded"
                  checked={productsSettings.showItemDescription}
                  onCheckedChange={() => {
                    dispatch(updateProducts({ showItemDescription: !(productsSettings.showItemDescription) }));
                  }}
                />
                <label
                  htmlFor="rounded"
                  className="text-sm font-medium text-gray-700"
                >
                  Show Product Description
                </label>
              </div>
              {productsSettings.showItemDescription &&
                <div className="flex justify-between items-center space-x-2">
                  <label
                    htmlFor="text-color"
                    className="text-sm font-medium text-gray-700 whitespace-nowrap"
                  >
                    Product Description Color:
                  </label>
                  <Input
                    type="color"
                    id="text-color"
                    className="w-25"
                    value={productsSettings.itemDescriptionColor || ''}
                    onChange={(e: any) => {
                      dispatch(updateProducts({ itemDescriptionColor: e.target.value }));
                    }}
                  />
                </div>
              }
              <Separator />
              <div className="flex justify-between items-center space-x-2">
                <label
                  htmlFor="text-color"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Product Price Color:
                </label>
                <Input
                  type="color"
                  id="text-color"
                  className="w-25"
                  value={productsSettings.itemPriceColor || ''}
                  onChange={(e: any) => {
                    dispatch(updateProducts({ itemPriceColor: e.target.value }));
                  }}
                />
              </div>
            </>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
