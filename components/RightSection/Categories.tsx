import React from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { updateCategories } from "@/store/slices/styleSettings";

const Categories: React.FC = () => {
  const dispatch = useDispatch()
  const categoriesSettings = useSelector((state: RootState) => state.styleSettings.categories);
  return (
    <div className="m-4">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <div className="grid gap-4">

          <div className="flex items-center space-x-2">
            <Checkbox
              id="rounded"
              checked={categoriesSettings.show}
              onCheckedChange={() => {
                dispatch(updateCategories({ show: !(categoriesSettings.show) }));
              }}
            />
            <label
              htmlFor="rounded"
              className="text-sm font-medium text-gray-700"
            >
              Show Categories
            </label>
          </div>

          {categoriesSettings.show && <>
            <Separator />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rounded"
                checked={categoriesSettings.showTitle}
                onCheckedChange={() => {
                  dispatch(updateCategories({ showTitle: !(categoriesSettings.showTitle) }));
                }}
              />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Show Section Title
              </label>
            </div>
            {categoriesSettings.showTitle &&
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
                    value={categoriesSettings.title || ''}
                    onChange={(e: any) => {
                      dispatch(updateCategories({ title: e.target.value }));
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
                    value={categoriesSettings.titleColor || ''}
                    onChange={(e: any) => {
                      dispatch(updateCategories({ titleColor: e.target.value }));
                    }}
                  />
                </div>
              </>
            }
            <Separator />
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rounded"
                checked={categoriesSettings.showCategoryItemName}
                onCheckedChange={() => {
                  dispatch(updateCategories({ showCategoryItemName: !(categoriesSettings.showCategoryItemName) }));
                }}
              />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Show Category Name
              </label>
            </div>
            {categoriesSettings.showCategoryItemName &&
              <div className="flex justify-between items-center space-x-2">
                <label
                  htmlFor="text-color"
                  className="text-sm font-medium text-gray-700 whitespace-nowrap"
                >
                  Category Name Color:
                </label>
                <Input
                  type="color"
                  id="text-color"
                  className="w-25"
                  value={categoriesSettings.itemNameColor || ''}
                  onChange={(e: any) => {
                    dispatch(updateCategories({ itemNameColor: e.target.value }));
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
                Category Design
              </label>
              <Select
                value={categoriesSettings.categoryItemDesign || undefined}
                onValueChange={(value: string | undefined) => {
                  dispatch(updateCategories({ categoryItemDesign: value || null }));
                }}
              >
                <SelectTrigger className="w-100">
                  <SelectValue placeholder="Choose location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="rounded">Rounded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>}
        </div>
      </div>
    </div>
  );
};

export default Categories;
