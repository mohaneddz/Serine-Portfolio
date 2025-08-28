"use client";
import Image from 'next/image';

const scrollup = '/svgs/misc/scroll-up.svg';
const scrolldown = '/svgs/misc/scroll-down.svg';
const scrollcontainer = '/svgs/misc/scroll-container.svg';

import { useState, useEffect, useCallback, useRef } from 'react';

export default function CustomScrollbar () {

  const [thumbHeight, setThumbHeight] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);
  const scrollTrackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updateThumb = useCallback(() => {
    const {
      scrollHeight,    // Total scrollable height
      clientHeight,    // Visible height of the element
      scrollTop        // Current vertical scroll position
    } = document.documentElement;

    const newThumbHeight = (clientHeight / scrollHeight) * 100; // as a percentage
    const newThumbPosition = (scrollTop / (scrollHeight - clientHeight)) * (100 - newThumbHeight); // as a percentage

    setThumbHeight(newThumbHeight);
    setThumbPosition(newThumbPosition);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateThumb);
    window.addEventListener('resize', updateThumb);
    updateThumb(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', updateThumb);
      window.removeEventListener('resize', updateThumb);
    };
  }, [updateThumb]);
  
  const handleScrollUp = () => {
    window.scrollBy({ top: -50, behavior: 'smooth' });
  };

  const handleScrollDown = () => {
    window.scrollBy({ top: 50, behavior: 'smooth' });
  };

  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    isDragging.current = true;
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !scrollTrackRef.current) return;
    
    const { clientHeight, scrollHeight } = document.documentElement;
    const trackRect = scrollTrackRef.current.getBoundingClientRect();
    
    const trackTop = trackRect.top;
    const clickPositionInTrack = e.clientY - trackTop;
    const trackHeight = trackRect.height;
    
    const scrollPercentage = clickPositionInTrack / trackHeight;
    const scrollTop = scrollPercentage * (scrollHeight - clientHeight);
    
    window.scrollTo({ top: scrollTop });
  }, []);
  
  const handleMouseUp = () => {
    isDragging.current = false;
  };
  
  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove]);


  return (
    <div
      ref={scrollTrackRef}
      className="fixed top-0 left-0 h-[calc(100vh-12px)] w-8 bg-opacity-50 z-50 flex flex-col items-center m-2 bg-white rounded-lg py-2 border-2 border-black"
      style={{'--thumb-height': `${thumbHeight}%`, '--thumb-position': `${thumbPosition}%`} as React.CSSProperties}
    >

      <button onClick={handleScrollUp} className="mb-2">
        <Image src={scrollup} alt="Scroll Up" width={14} height={14} />
      </button>

      <div className="relative flex-grow w-4 bg-gray-300 rounded-full">
        <Image src={scrollcontainer} alt="Scroll Container" fill className="object-cover rounded-full" />
        <div
          onMouseDown={handleThumbMouseDown}
          className="absolute w-full bg-white border-2 border-black rounded-full cursor-pointer"
          style={{
            height: 'var(--thumb-height)',
            top: 'var(--thumb-position)',
          }}
        ></div>
      </div>

      <button onClick={handleScrollDown} className="mt-2">
        <Image src={scrolldown} alt="Scroll Down" width={14} height={14} />
      </button>

    </div>
  );
};