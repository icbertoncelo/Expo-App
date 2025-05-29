import { PhotosListContext } from "@/contexts/PhotosListContext";
import { useContext } from "react";

export default function usePhotos() {
  const context = useContext(PhotosListContext);

  return context;
}
