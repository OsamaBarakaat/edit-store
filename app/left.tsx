import { Image, PaintBucket, Text } from "lucide-react";
import React from "react";
import { Separator } from "@/components/ui/separator";

const Left = () => {
  return (
    <main className="w-full min-h-screen max-h-screen overflow-auto p-4">
      <div className="Banners">
        <div className="head">
          <p className="text-start text-4xl">Banners</p>
        </div>
        <div className="body flex justify-between items-center my-4 gap-2 flex-wrap">
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
        </div>
      </div>
      <Separator />
      <div className="Categories">
        <div className="head">
          <p className="text-start text-4xl">Categories</p>
        </div>
        <div className="body flex justify-between items-center my-4 gap-2 flex-wrap">
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
        </div>
      </div>
      <Separator />

      <div className="Products">
        <div className="head">
          <p className="text-start text-4xl">Products</p>
        </div>
        <div className="body flex justify-between items-center my-4 gap-2 flex-wrap">
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
          <div className="text flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Text size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Text</span>
          </div>
          <div className="image flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <Image size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Image</span>
          </div>
          <div className="color flex justify-center items-center flex-col gap-1 bg-slate-100 rounded-md p-4 w-[31%]">
            <span>
              <PaintBucket size="24" color="gray" />
            </span>
            <span className="text-center text-xs text-slate-400">Color</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Left;
