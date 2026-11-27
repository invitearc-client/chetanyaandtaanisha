"use client";
import { useEffect, useState, useRef } from "react";
import LadkiSecondDetails from "../components/LadkiSecondDetails";
import LadkiEvents from "../components/LadkiEvents";

export default function LadkiDetails() {

  const [showScroll, setShowScroll] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    setShowScroll(window.scrollY < 20);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


  return (
    <>

 <div className="fixed top-20 right-2 z-50 flex flex-col items-center">
  <button
    type="button"
    onClick={() => {
      window.scrollBy({
        top: window.innerHeight * 0.7,
        behavior: "smooth",
      });
    }}
    className="flex flex-col items-center gap-2 text-[#fff]"
    aria-label="Scroll down to explore"
  >
    <span className="flex h-16 w-6 items-center justify-center rounded-full border-2 border-[#B35800] bg-[#B35800] cursor-pointer">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m7 10 5 5 5-5" />
        <path d="m7 5 5 5 5-5" />
      </svg>
    </span>

    <span className="animate-pulse text-[12px] tracking-[2px] poppins-bold  font-bold text-[#B35800]">
      SCROLL <br /> DOWN
    </span>
   
  </button>

</div>



      <div className="mx-auto w-full max-w-4xl text-center px-4">
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          With the Blessings of Sai Baba
        </p>
        <br />
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          Smt. Shashi Gupta w/o Late Shri Jugal Kishore Gupta <br /> and <br />{" "}
          Smt. Neelam Malhotra w/o Late Shri Ravinder Kumar Malhotra
        </p>
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond mt-4">
          would like to cordially invite you to the Wedding of their
          granddaughter,
        </p>
        <div className="mt-8 text-center">
          <h2 className="text-[#F6F0E4] beau-rivage-regular text-center mt-14 md:text-7xl text-[60px] lg:text-[70px] leading-tight">
            Taanisha
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond md:text-2xl text-[16px]">
            (Daughter of Mrs. Shweta and Mr. Amit Gupta )
          </p>

          <h2 className="text-[#F6F0E4] beau-rivage-regular text-center text-[60px] md:text-7xl lg:text-[70px] leading-tight">
            <span className="text-[#F6F0E4] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
              Weds
            </span>
            <br />
            Chetanya
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond  md:text-2xl text-[16px]">
            (Son of Mrs. Jyoti and Mr. Sanjay Koti)
          </p>

          <LadkiEvents />
        </div>
      </div>
      <img
        src="/assets/hero_section_bottom.webp"
        alt="Mata Image"
        className="relative left-1/2 mt-24 block w-screen max-w-none -translate-x-1/2"
      />

      <LadkiSecondDetails />
    </>
  );
}
