"use client";
import { useState } from "react";
import ScratchText from "../components/ScratchText";
import MarriageCountdown from "../components/MarriageCountdown";
import LadkiWardrobe from "../components/LadkiWardrobe";
import LadkiWeather from "../components/LadkiWeather";
export default function LadkiSecondDetails() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 flex-col items-center text-center bg-[url('/assets/ladkadetailsection_bg.webp')] bg-cover bg-no-repeat pt-20 md:pt-30">
      <ScratchText onReveal={() => setRevealed(true)} />

      {revealed && (
        <div className="countdown-fade-in">
          <MarriageCountdown />
        </div>
      )}
      <LadkiWardrobe />

      <div className="md:w-1/3 lg:w-1/5 w-2/3 min-h-[420px] md:min-h-[420px]  lg:min-h-[480px] 3xl:min-h-[600px]  bg-[url('/assets/rsvp_bg.webp')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-12">
        <h2 className="text-[22px] md:text-3xl lg:text-[30px] text-center text-[#775A19] px-6 md:px-8 leading-6 md:leading-8 jacques-francois-regular">
          Awaiting the Pleasure of Your Company
        </h2>

        <p className="md:text-xl text-[15px] text-[#775A19] text-center mt-3 jacques-francois-regular">
          Click the link to RSVP
        </p>

        <img
            src="/assets/whatsapp.png"
            alt="Shree Ganesh"
            className="w-[40px]"
          />
      </div>


      <LadkiWeather/>
       <img
        src="/assets/bottom_img.webp"
        alt="Mata Image"
        className="relative left-1/2 block w-screen max-w-none -translate-x-1/2"
      />
    </div>
  );
}
