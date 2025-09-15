"use client";
import { useState } from "react";
import Image from "next/image";

const FALLBACK_IMG = "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/career2.jpg"; // keep a local fallback image

const photos = [
  { src: "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/career2.jpg", alt: "GMP Partner" },
  { src: "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/career_img.JPG", alt: "Meta Partner" },
  { src: "https://storage.googleapis.com/website-bucket-uploads/home_page/Images_and_Icons/career3.JPG", alt: "Google parnter" },
];

export default function TeamGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % photos.length);

  return (
    <>
      {/* ==== Grid of team photos ==== */}
      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {photos?.map((photo, i) => (
          <Image
            key={i}
            src={photo?.src}
            alt={photo?.alt}
            width={600}
            height={400}
            className="w-full h-[250px] object-cover rounded-xl shadow-md cursor-pointer"
            onClick={() => openLightbox(i)}
            onError={(e) => {
              (e.currentTarget).src = FALLBACK_IMG;
            }}
          />
        ))}
      </div>

      {/* ==== Lightbox ==== */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center">
          <button
            className="absolute top-6 right-6 bg-white text-black rounded-full px-3 py-1 font-bold text-lg"
            onClick={closeLightbox}
          >
            ✕
          </button>
          <img
            src={photos[currentIndex]?.src || FALLBACK_IMG}
            alt={photos[currentIndex]?.alt || "Team Photo"}
            className="max-h-[80%] max-w-[90%] rounded-xl"
            onError={(e) => {
              (e.currentTarget).src = FALLBACK_IMG;
            }}
          />
          <div className="mt-4 flex gap-4">
            <button
              onClick={showPrev}
              className="bg-white rounded-md px-4 py-2 font-semibold"
            >
              ◀ Prev
            </button>
            <button
              onClick={showNext}
              className="bg-white rounded-md px-4 py-2 font-semibold"
            >
              Next ▶
            </button>
          </div>
        </div>
      )}
    </>
  );
}
