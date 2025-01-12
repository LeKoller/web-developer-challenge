interface EventTarget {
  target: {
    value: string;
  };
}

interface ContentCardProps {
  _id: string;
  author: string;
  message: string;
  image: string;
}

interface ImageDisplayProps {
  hasImage?: boolean;
  src: string;
}

interface ContentDataSource {
  _id: string;
  author: string;
  message: string;
  imageName: string;
}

interface ImageWrapperProps {
  onSelectImage: (file: File) => void;
}

interface OptionsWrapperProps {
  imageData: File;
  handleClearImageData: () => void;
}

export type {
  EventTarget,
  ContentCardProps,
  ImageDisplayProps,
  ContentDataSource,
  ImageWrapperProps,
  OptionsWrapperProps,
};
