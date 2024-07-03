"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Left from "./left";
import Mid from "./mid";
import Right from "./right";
import { useState } from "react";

export default function Home() {
  const [rightContent, setRightContent] = useState("default");
  return (
    <main>
      <div className="flex justify-between gap-4 w-11/12 mt-8 mx-auto">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <Left />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <div>
              <Mid setRightContent={setRightContent} />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <Right content={rightContent} />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="font-bold text-center text-3xl text-white">
        Edit ur store
      </div>
    </main>
  );
}
