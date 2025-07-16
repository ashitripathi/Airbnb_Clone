import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [showAllImages, setShowAllImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleShowAllImages = () => {
    setShowAllImages(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseGallery = () => {
    setShowAllImages(false);
    document.body.style.overflow = 'auto';
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!showAllImages) return;
      
      if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        handleCloseGallery();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAllImages, images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="relative rounded-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="md:col-span-1 aspect-w-4 aspect-h-3 md:row-span-2 h-72 md:h-full">
            <img
              src={images[0]}
              alt={`${title} main`}
              className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition"
              onClick={handleShowAllImages}
            />
          </div>

          <div className="hidden md:grid grid-cols-2 gap-2 h-72">
            {images.slice(1, 3).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} ${index + 1}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition"
                  onClick={handleShowAllImages}
                />
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-2 gap-2 h-72">
            {images.slice(3, 5).map((image, index) => (
              <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} ${index + 3}`}
                  className="w-full h-full object-cover cursor-pointer hover:opacity-95 transition"
                  onClick={handleShowAllImages}
                />
              </div>
            ))}
          </div>

          {images.length > 5 && (
            <button
              className="absolute bottom-4 right-4 px-3 py-1.5 bg-white rounded-lg text-sm font-medium shadow-md flex items-center hover:bg-neutral-100 transition"
              onClick={handleShowAllImages}
            >
              <svg viewBox="0 0 16 16" width="16px" height="16px" className="mr-1">
                <path d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM3 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM13 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"></path>
              </svg>
              Show all photos
            </button>
          )}
        </div>
      </div>
      
      {showAllImages && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col fade-in">
          <div className="flex justify-between items-center p-4 text-white">
            <button
              onClick={handleCloseGallery}
              className="flex items-center p-2 hover:bg-neutral-800 rounded-full transition"
            >
              <X size={20} />
              <span className="ml-2">Close</span>
            </button>
            <div className="text-center">
              <span>{currentImageIndex + 1} / {images.length}</span>
            </div>
            <div></div>
          </div>
          
          <div className="flex-grow flex items-center justify-center relative">
            <button
              onClick={handlePrevImage}
              className="absolute left-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition z-10"
            >
              <ChevronLeft size={20} className="text-black" />
            </button>
            
            <div className="w-11/12 h-4/5 flex items-center justify-center">
              <img
                src={images[currentImageIndex]}
                alt={`${title} ${currentImageIndex}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <button
              onClick={handleNextImage}
              className="absolute right-4 bg-white bg-opacity-90 p-2 rounded-full hover:bg-opacity-100 transition z-10"
            >
              <ChevronRight size={20} className="text-black" />
            </button>
          </div>
          
          <div className="h-24 overflow-x-auto">
            <div className="flex space-x-2 p-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className={`h-16 w-24 flex-shrink-0 cursor-pointer ${
                    currentImageIndex === index ? 'border-2 border-white opacity-100' : 'opacity-60'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${title} thumbnail ${index}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;