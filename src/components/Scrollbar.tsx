"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

const scrollup = "/svgs/misc/scroll-up.svg";
const scrolldown = "/svgs/misc/scroll-down.svg";
const scrollcontainer = "/svgs/misc/scroll-container.svg";

export default function CustomScrollbar() {
  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbPos, setThumbPos] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragOffset = useRef(0);

  // -------------------------------------------------------
  // UPDATE THUMB BASED ON PAGE SCROLL
  // -------------------------------------------------------
  const updateThumb = useCallback(() => {
    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight;
    const clientHeight = doc.clientHeight;
    const scrollTop = doc.scrollTop;

    if (scrollHeight <= clientHeight) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const heightPercent = (clientHeight / scrollHeight) * 100;
    const posPercent =
      (scrollTop / (scrollHeight - clientHeight)) * (100 - heightPercent);

    setThumbHeight(heightPercent);
    setThumbPos(posPercent);
  }, []);

  useEffect(() => {
    updateThumb();
    window.addEventListener("scroll", updateThumb);
    window.addEventListener("resize", updateThumb);
    return () => {
      window.removeEventListener("scroll", updateThumb);
      window.removeEventListener("resize", updateThumb);
    };
  }, [updateThumb]);

  // -------------------------------------------------------
  // CLICK UP/DOWN BUTTONS
  // -------------------------------------------------------
  const handleScrollUp = () => window.scrollBy({ top: -80, behavior: "smooth" });
  const handleScrollDown = () =>
    window.scrollBy({ top: 80, behavior: "smooth" });

  // -------------------------------------------------------
  // DRAGGING LOGIC
  // -------------------------------------------------------
  const onThumbDown = (e: React.MouseEvent) => {
    isDragging.current = true;

    // Save where inside thumb the user clicked
    const thumbRect = (e.target as HTMLDivElement).getBoundingClientRect();
    dragOffset.current = e.clientY - thumbRect.top;

    document.body.style.userSelect = "none"; // disable text selection
  };

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const trackHeight = trackRect.height;

    const doc = document.documentElement;
    const scrollHeight = doc.scrollHeight;
    const clientHeight = doc.clientHeight;

    const maxThumbMove = trackHeight - (thumbHeight / 100) * trackHeight;

    // Position of mouse inside the track
    let newPos = e.clientY - trackRect.top - dragOffset.current;
    newPos = Math.max(0, Math.min(newPos, maxThumbMove));

    const scrollPercent = newPos / maxThumbMove;

    const newScrollTop = scrollPercent * (scrollHeight - clientHeight);
    window.scrollTo({ top: newScrollTop });
  }, [thumbHeight]);

  const onMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = ""; // restore
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove]);

  // -------------------------------------------------------
  // RENDER
  // -------------------------------------------------------
  if (!isVisible) return null;

  return (
    <div
      ref={trackRef}
      className="fixed top-0 left-0 h-[calc(100vh-12px)] w-8 z-50 flex flex-col items-center m-2 
                 bg-white/60 backdrop-blur-md border-2 border-black rounded-lg py-2"
      style={
        {
          "--thumb-h": `${thumbHeight}%`,
          "--thumb-p": `${thumbPos}%`,
        } as React.CSSProperties
      }
    >
      {/* UP BUTTON */}
      <button onClick={handleScrollUp} className="mb-2">
        <Image src={scrollup} alt="Scroll Up" width={14} height={14} />
      </button>

      {/* TRACK */}
      <div className="relative flex-grow w-4 bg-gray-300 rounded-full overflow-hidden py-2">
        <Image
          src={scrollcontainer}
          alt="Scroll Container"
          fill
          className="object-cover"
        />

        {/* THUMB */}
        <div
          onMouseDown={onThumbDown}
          className="absolute w-full bg-white border-2 shadow-2xl shadow-black/40 border-black rounded-full cursor-pointer -translate-x-[1px] z-100
                     transition-transform hover:brightness-90"
          style={{
            height: "var(--thumb-h)",
            top: "var(--thumb-p)",
          }}
        ></div>
      </div>

      {/* DOWN BUTTON */}
      <button onClick={handleScrollDown} className="mt-2">
        <Image src={scrolldown} alt="Scroll Down" width={14} height={14} />
      </button>
    </div>
  );
}
