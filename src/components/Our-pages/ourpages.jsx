import React, { useEffect, useRef, useState } from "react";

const Ourpages = ({ cards = [] }) => {
  const wrapperRef = useRef(null);
  const cardRefs = useRef([]);
  const [bg, setBg] = useState({ w: 0, h: 0, x: 0, y: 0, opacity: 0 });

  // Place highlight on first card (hidden) on mount
  useEffect(() => {
    if (!cards.length) return;
    const el = cardRefs.current[0];
    const wrap = wrapperRef.current;
    if (!el || !wrap) return;
    const rect = el.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    setBg({
      w: rect.width,
      h: rect.height,
      x: rect.left - wRect.left,
      y: rect.top - wRect.top,
      opacity: 0,
    });
  }, [cards.length]);

  const handleEnter = (idx) => {
    const el = cardRefs.current[idx];
    const wrap = wrapperRef.current;
    if (!el || !wrap) return;
    const rect = el.getBoundingClientRect();
    const wRect = wrap.getBoundingClientRect();
    setBg({
      w: rect.width,
      h: rect.height,
      x: rect.left - wRect.left,
      y: rect.top - wRect.top,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setBg((b) => ({ ...b, opacity: 0, w: 0, h: 0 }));
  };

  if (!Array.isArray(cards) || !cards.length) return null;

  return (
    <section className="min-h-[200px]">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div
          ref={wrapperRef}
          className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Moving background highlight (keep/remove as you like) */}
          <div
            aria-hidden
            className="pointer-events-none absolute rounded-xl transition-[transform,opacity,width,height] duration-300 ease-out"
            style={{
              backgroundColor: "#041A2F", // change to 'transparent' to hide
              width: `${bg.w}px`,
              height: `${bg.h}px`,
              transform: `translate(${bg.x}px, ${bg.y}px)`,
              opacity: bg.opacity,
            }}
          />

          {cards.map((card, i) => (
            <div
              key={card.id ?? i}
              ref={(el) => (cardRefs.current[i] = el)}
              onMouseEnter={() => handleEnter(i)}
              onMouseLeave={handleLeave}
              className="relative p-[1.5px] rounded-xl"
            >
              {/* Outer frame (shadow removed) */}
              <div className="relative flex flex-col h-full min-h-[280px] rounded-xl p-[1.5px] bg-[radial-gradient(circle_230px_at_0%_0%,_#ffffff,_#f0f0f0)]">
                {/* Card Body (no light ray, no border lines, no shadows) */}
                <div className="relative flex flex-col h-full w-full rounded-xl border border-[#F5F7F9] bg-[#F5F7F9] px-6 py-6 text-center text-black">
                  <h2 className="font-extrabold text-[18px] sm:text-[20px] p-4 bg-gradient-to-tr from-black via-[#9693a5] to-[#363434] bg-clip-text text-transparent mb-2">
                    {card.title}
                  </h2>
                  <p className="text-sm sm:text-base leading-relaxed flex-grow p-4 font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ourpages;
