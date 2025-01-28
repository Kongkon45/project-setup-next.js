import React from 'react';
import Image from 'next/image'

type ImagePreviewProps = {
  src: string;
};

const ImagePreview: React.FC<ImagePreviewProps> = ({ src }) => {
  return (
    <div className="mt-4">
      <Image src={src} alt="Profile Preview" width={32} height={32} className="w-32 h-32 object-cover rounded" />
    </div>
  );
};

export default ImagePreview;
