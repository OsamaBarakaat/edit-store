import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RightProps {
  content: string;
}

const Right: React.FC<RightProps> = ({ content }) => {
  let cardContent;

  switch (content) {
    case "header":
      cardContent = (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="grid gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="banner">Your Banner</Label>
              <Textarea id="banner" placeholder="Type your description here." />
              <p className="text-sm text-gray-500">
                Your Description will appear on your store
              </p>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox id="rounded" />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Your banner is rounded?
              </label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <label
                htmlFor="background-color"
                className="text-sm font-medium text-gray-700"
              >
                What is the color of your background?
              </label>
              <Input type="color" id="background-color" />
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <label
                htmlFor="text-color"
                className="text-sm font-medium text-gray-700"
              >
                What is the color of the text?
              </label>
              <Input type="color" id="text-color" />
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <label
                htmlFor="theme"
                className="text-sm font-medium text-gray-700"
              >
                What is the type of the text?
              </label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Text Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Mono">Mono</SelectItem>
                  <SelectItem value="Open-Sans">Open-Sans</SelectItem>
                  <SelectItem value="Times Roman">Times Roman</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      );
      break;

    case "category":
      cardContent = (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="rounded" />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Your category items are rounded?
              </label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox id="autoplay" />
              <label
                htmlFor="autoplay"
                className="text-sm font-medium text-gray-700"
              >
                Your category swiper is autoplay?
              </label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <label
                htmlFor="items"
                className="text-sm font-medium text-gray-700"
              >
                How many items do you want on the swiper?
              </label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Choose number" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <label
                htmlFor="text-position"
                className="text-sm font-medium text-gray-700"
              >
                The text is on top or bottom?
              </label>
              <Select>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Choose position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="top">Top</SelectItem>
                  <SelectItem value="bottom">Bottom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      );
      break;

    case "products":
      cardContent = (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <div className="grid gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="rounded" />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Your Product images are rounded?
              </label>
            </div>

            <Separator />

            <div className="flex items-center space-x-2">
              <Checkbox id="rounded" />
              <label
                htmlFor="rounded"
                className="text-sm font-medium text-gray-700"
              >
                Your prodcut name is bold?
              </label>
            </div>

            <Separator />

            <div className="grid gap-1.5">
              <Label htmlFor="products-head">
                You want to change "New Arrivals" ?
              </Label>
              <Input id="products-head" placeholder="Enter new head" />
            </div>
          </div>
        </div>
      );
      break;

    default:
      cardContent = (
        <div className="p-6 bg-white shadow-md rounded-lg">
          Select a section to configure its settings.
        </div>
      );
  }

  return <div className="m-4">{cardContent}</div>;
};

export default Right;
