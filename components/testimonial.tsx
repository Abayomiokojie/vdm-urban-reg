"use client";
import { useEffect, useMemo, useRef, useState } from "react";

type TItem = { quote: string; author: string };

const ITEMS: TItem[] = [
  {
    quote:
      "VDM UrbanReg Compliance Solutions helped us navigate the complex regulatory landscape in Lagos with ease. Their expertise is unmatched!",
    author: "John Ezino, CEO of Mantara Group",
  },
  {
    quote:
      "Thanks to VDM, we were able to secure our building permits without any hassle. Highly recommend their services!",
    author: "Olawale Daniel, Project Manager",
  },
  {
    quote:
      "VDM's team was incredibly responsive and knowledgeable. They made the entire process seamless!",
    author: "Alex Johnson, Architect",
  },
  {
    quote:
      "VDM's attention to detail and commitment to client satisfaction is truly impressive. They went above and beyond for us!",
    author: "Sarah Lee, Developer",
  },
  {
    quote:
      "VDM's team provided exceptional support throughout our project. Their insights were invaluable to completing the budget within the scheduled time!",
    author: "Michael Brown, Contractor",
  },
];

export default function Testimonial() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  // for controlling arrow disabled state
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [visible, setVisible] = useState<number>(3);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // total pages where each step is one-card shift
  const totalPages = useMemo(
    () => Math.max(1, ITEMS.length - visible + 1),
    [visible]
  );

  const getCardMetrics = () => {
    const el = scrollerRef.current;
    if (!el) return { amount: 0, gap: 0, cardWidth: 0 };
    const firstItem = el.querySelector("article") as HTMLElement | null;
    if (!firstItem) return { amount: 0, gap: 0, cardWidth: 0 };
    const cardWidth = firstItem.getBoundingClientRect().width;
    const styles = getComputedStyle(el);
    const gapStr = (styles.columnGap || styles.gap || "0px") as string;
    const gap = parseFloat(gapStr) || 0;
    return { amount: cardWidth + gap, gap, cardWidth };
  };

  const updateEdgeState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const { amount } = getCardMetrics();
    if (amount > 0) {
      const idx = Math.round(scrollLeft / amount);
      setCurrentIndex(
        Math.min(Math.max(0, idx), Math.max(0, ITEMS.length - visible))
      );
    }
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scrollByOne = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const { amount } = getCardMetrics();
    if (!amount) return;
    const nextIndex = Math.min(
      Math.max(0, currentIndex + dir),
      Math.max(0, ITEMS.length - visible)
    );
    el.scrollTo({ left: nextIndex * amount, behavior: "smooth" });
    setCurrentIndex(nextIndex);
    setTimeout(updateEdgeState, 350);
  };

  // pointer drag to scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = true;
    el.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    startScrollLeft.current = el.scrollLeft;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el || !isDown.current) return;
    const dx = e.clientX - startX.current;
    el.scrollLeft = startScrollLeft.current - dx;
    updateEdgeState();
  };
  const onPointerUp = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    isDown.current = false;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
    // snap-to-card logic
    const { amount } = getCardMetrics();
    if (amount > 0) {
      const rawIndex = Math.round(el.scrollLeft / amount);
      const snapIndex = Math.min(
        Math.max(0, rawIndex),
        Math.max(0, ITEMS.length - visible)
      );
      el.scrollTo({ left: snapIndex * amount, behavior: "smooth" });
      setCurrentIndex(snapIndex);
      setTimeout(updateEdgeState, 200);
    }
  };

  // initialize edge state on first render
  useEffect(() => {
    // compute visible by breakpoint (Tailwind default: md=768, lg=1024)
    const computeVisible = () => {
      const isLg = window.matchMedia("(min-width: 1024px)").matches;
      const isMd = window.matchMedia("(min-width: 768px)").matches;
      setVisible(isLg ? 3 : isMd ? 2 : 1);
    };
    computeVisible();
    const onResize = () => {
      computeVisible();
      // Recalculate edge state after a tick
      setTimeout(() => {
        updateEdgeState();
        // Clamp currentIndex within new range
        setCurrentIndex((idx) =>
          Math.min(
            idx,
            Math.max(0, ITEMS.length - (isNaN(visible) ? 3 : visible))
          )
        );
      }, 50);
    };
    window.addEventListener("resize", onResize);
    // initial edge calc
    setTimeout(updateEdgeState, 0);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="py-20 bg-blue-100/40">
      <div className="container mx-auto px-6 sm:px-8 md:px-10 max-w-[1100px]">
        <p className="text-center text-slate-500 text-sm tracking-wide">
          TESTIMONIALS
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          What Our Clients Say
        </h2>

        <div className="relative mx-10 ml-12 sm:ml-12">
          {/* Left Arrow */}
          <button
            type="button"
            aria-label="Previous testimonials"
            onClick={() => scrollByOne(-1)}
            disabled={atStart}
            className={`absolute -left-14 top-[40%] -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            aria-label="Next testimonials"
            onClick={() => scrollByOne(1)}
            disabled={atEnd}
            className={`absolute -right-11 top-[40%] -translate-y-1/2 z-10 rounded-full bg-white shadow p-2 border border-slate-200 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Scroller */}
          <div
            ref={scrollerRef}
            onScroll={updateEdgeState}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-6 px-1"
          >
            {/* Main Content */}
            {ITEMS.map((t, i) => (
              <article
                key={i}
                className="snap-start flex-none basis-full min-w-full max-w-full md:basis-1/2 md:min-w-[50%] md:max-w-[50%] lg:basis-1/3 lg:min-w-[31.7333%] lg:max-w-[31.7333%] mb-8"
              >
                <div className="bg-white p-6 rounded-xl shadow-xl h-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    className="text-amber-700"
                  >
                    <path
                      fill="currentColor"
                      // fill="#8868ff"
                      d="M14.505 5.873Q8.6 9.654 8.6 14.98q0 1.657.577 1.657l.396-.107q.467-.18.756-.18q1.692 0 2.825 1.23t1.134 3.036q-.001 1.736-1.225 2.947q-1.224 1.21-2.952 1.21q-2.412 0-3.98-1.983q-1.564-1.98-1.564-4.977q-.001-3.39 1.33-6.203q1.334-2.812 4.068-5.085q2.736-2.271 3.492-2.272q.504 0 .828.486q.324.485.324.845l-.107.288zm12.96 0q-5.905 3.78-5.904 9.108q0 1.657.577 1.657l.396-.107q.467-.18.756-.18q1.656 0 2.807 1.23q1.153 1.228 1.152 3.036q-.001 1.736-1.225 2.947q-1.224 1.21-2.952 1.21q-2.412 0-3.98-1.983q-1.564-1.98-1.564-4.977q-.002-3.426 1.35-6.256q1.35-2.831 4.067-5.067q2.722-2.237 3.475-2.237q.505 0 .83.486q.323.486.323.846z"
                    />
                  </svg>
                  <div className="flex flex-col justify-between h-[90%]">
                    <p className="text-gray-600 mt-2">&quot;{t.quote}&quot;</p>
                    <h4 className="font-semibold mb-1">- {t.author}</h4>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Indicators (optional) */}
          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to testimonials starting at ${idx + 1}`}
                onClick={() => {
                  const el = scrollerRef.current;
                  if (!el) return;
                  const { amount } = getCardMetrics();
                  el.scrollTo({ left: idx * amount, behavior: "smooth" });
                  setCurrentIndex(idx);
                  setTimeout(updateEdgeState, 200);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-blue-600" : "bg-slate-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
