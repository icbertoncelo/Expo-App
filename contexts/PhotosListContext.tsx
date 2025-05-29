import { tagPhotoUpdate } from "@/utils/notificationTags";
import {
  Children,
  createContext,
  ReactNode,
  useCallback,
  useState,
} from "react";

interface PhotosListContextData {
  photos: string[];
  photosCount: number;
  onAddPhoto: () => void;
  onRemovePhoto: (photoId: string) => void;
}

interface PhotosListProviderProps {
  children: ReactNode;
}

export const PhotosListContext = createContext({} as PhotosListContextData);

export default function PhotosListProvider({
  children,
}: PhotosListProviderProps) {
  const [photos, setPhotos] = useState<string[]>([]);

  const onAddPhoto = useCallback(() => {
    const randomString = new Date().getTime().toString();
    setPhotos((prevState) => [...prevState, randomString]);
    tagPhotoUpdate(photos.length + 1);
  }, []);

  const onRemovePhoto = useCallback((photoId: string) => {
    setPhotos((prevState) => prevState.filter((photo) => photo !== photoId));
    tagPhotoUpdate(photos.length - 1);
  }, []);

  return (
    <PhotosListContext.Provider
      value={{
        photos,
        photosCount: photos.length,
        onAddPhoto,
        onRemovePhoto,
      }}
    >
      {children}
    </PhotosListContext.Provider>
  );
}
