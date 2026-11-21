"use client";

import { useState } from "react";
import LadkeDetails from "../components/LadkeDetails";
import LadkiDetails from "../components/LadkiDetails";
import RoseHeroTemp from "../components/RoseHeroTemp";
import BottomNavigation from "../components/BottomNavigation";
export default function HeroSection({ onSideChange }) {
  const [selectedSide, setSelectedSide] = useState(null);

  const selectSide = (side, event) => {
    event.stopPropagation();
    setSelectedSide(side);
    onSideChange?.(side);
  };

  return (
   <section id="home" className="relative flex min-h-screen w-full flex-col overflow-x-clip">
  {/* BACKGROUND */}
<div
  className="
    absolute inset-0 z-0 w-full
    bg-[#faf4e8]
    bg-[url('/assets/stock_mobile_bg3.webp')]
    lg:bg-[url('/assets/stock_bg.webp')]
    bg-top bg-no-repeat
    bg-[length:100%_auto]
  "
/>
      <div className="pointer-events-none fixed inset-0 z-20 h-screen w-screen">
        <RoseHeroTemp />
      </div>
      {/* ================= CONTENT ================= */}

       <div className="relative z-10 flex w-full flex-1 flex-col items-center  pt-10  sm:px-8 md:px-2 lg:px-6">
        {/* ================= GANESH ================= */}
        <div className="mt-4 flex justify-center md:mt-4 lg:mt-8">
          <img
            src="/assets/ganesh.png"
            alt="Shree Ganesh"
            className="w-[65px] sm:w-[65px] md:w-[90px] lg:w-[150px]"
          />
        </div>
  {/* <p className="text-[17px] md:text-2xl text-[#000] font-cormorant-garamond">
        Smt. Shashi Gupta w/o Late Shri Jugal Kishore Gupta and Smt. Neelam Malhotra w/o Late Shri Ravinder Kumar Malhotra
      </p> */}
        {/* ================= WEDDING LOGO ================= */}
        <div className="mt-8 flex flex-col items-center text-center md:mt-18 lg:mt-24">
          <img
            src="/assets/logo.png"
            alt="Wedding Logo"
            className="w-[110px]  md:w-[180px] lg:w-[280px]"
          />
        </div>

        {/* ================= BUTTONS ================= */}
        <div className="mt-80 flex w-full max-w-[500px]  items-center justify-center  md:gap-4 flex-row md:mt-160 lg:mt-180 3xl:mt-250">
          {/* LADKE */}
          <button
            type="button"
            data-side-song
            onClick={(event) => selectSide("ladke", event)}
            className={`
  w-full max-w-[220px] px-8 py-3
  text-xs tracking-[0.12em] text-[#2B1A12] font-semibold
  transition-all duration-300
  sm:w-[200px] md:w-[220px] md:py-3.5 md:text-sm
  cursor-pointer font-cormorant-garamond
  bg-[url('/assets/button_bg.png')]
  bg-contain bg-center bg-no-repeat
  hover:scale-105
  ${selectedSide === "ladke" ? "scale-105 shadow-lg" : ""}
`}
          >
            LADKE WAALE 
          </button>

          {/* LADKI */}
          <button
            type="button"
            data-side-song
            onClick={(event) => selectSide("ladki", event)}
            className={`
  w-full max-w-[220px] px-8 py-3
  text-xs tracking-[0.12em] text-[#2B1A12] font-semibold
  transition-all duration-300
  sm:w-[200px] md:w-[220px] md:py-3.5 md:text-sm
  cursor-pointer font-cormorant-garamond
  bg-[url('/assets/button_bg.png')]
  bg-contain bg-center bg-no-repeat
  hover:scale-105
  ${selectedSide === "ladki" ? "scale-105 shadow-lg" : ""}
`}
          >
            LADKI WAALE
          </button>
        </div>
        {/* ================= CHOOSE TEXT ================= */}
        <div className="mt-4 text-center sm:mt-16 md:mt-10 mb-24">
          <p className="text-[15px] text-[#F6F0E4] md:text-2xl font-cormorant-garamond tracking-widest">
            PLEASE CHOOSE ONE TO CONTINUE
          </p>
        </div>

        {/* ================= SELECTED DETAILS ================= */}
        {selectedSide && (
          <div className=" w-full max-w-5xl pb-10  ">
            {selectedSide === "ladke" ? <LadkeDetails /> : <LadkiDetails />}
          </div>
        )}
      </div>
      {selectedSide && <BottomNavigation />}




    </section>

    
  );
}
