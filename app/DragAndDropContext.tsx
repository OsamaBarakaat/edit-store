import React, { createContext, useState } from "react";
import { DndContext } from "@dnd-kit/core";

export const DragAndDropContext = createContext({});

const DragAndDropProvider = ({ children }: { children: React.ReactNode }) => {
  const [bannerContent, setBannerContent] = useState("");

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && over.id === "droppable-banner") {
      setBannerContent(active.data.current.content);
    }
  };

  return (
    <DragAndDropContext.Provider value={{ bannerContent }}>
      <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>
    </DragAndDropContext.Provider>
  );
};

export default DragAndDropProvider;
