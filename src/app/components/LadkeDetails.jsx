"use client";
import { useEffect, useState, useRef } from "react";
import LadkaSecondDetails from "../components/LadkaSecondDetails";
import Events from "../components/Events";

export default function LadkeDetails() {

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

        {/* <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          With the Blessings of Lord Ganesha
        </p>
        <br />
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          Late Shri. J.R Koti & Late Smt. Mato Bai Koti
          <br /> and <br />
          Late Smt. Prem Khurana & Shri. Ram Dayal Khurana
        </p>
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond mt-4">
          would like to cordially invite you to the Wedding of their grandson,
        </p> */}

        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          With the devine blessings of our parents <br/>Jyoti & Sanjay Koti
        </p>
<br/>
         <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
          request the pleasure of your gracious presence to celebrate the Wedding of their beloved son
        </p>
        <div className="mt-8 text-center">
          <h2 className="text-[#F6F0E4]  beau-rivage-regular text-center mt-14 md:text-7xl text-[60px] lg:text-[70px] leading-tight">
            Chetanya
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond md:text-2xl text-[16px]">
            (Grandson of Late Smt Mato Bai & Late Sh. Jaisa Ram Koti)
          </p>

          <h2 className="text-[#F6F0E4] text-center md:text-7xl text-[60px] lg:text-[70px] leading-tight  beau-rivage-regular">
            <span className="text-[#F6F0E4] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
              Weds
            </span>
            <br />
            Taanisha
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond  md:text-2xl text-[16px]">
         (Daughter of Mrs. Shweta & Mr. Amit Gupta)
          </p>

          <Events />
        </div>
      </div>
      <img
        src="/assets/hero_section_bottom.webp"
        alt="Mata Image"
        className="relative left-1/2 mt-24 block w-screen max-w-none -translate-x-1/2"
      />

      <LadkaSecondDetails />
    </>
  );
}
