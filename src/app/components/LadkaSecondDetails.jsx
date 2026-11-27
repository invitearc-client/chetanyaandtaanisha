"use client";
import { useState } from "react";
import ScratchText from "../components/ScratchText"; 
import MarriageCountdown from "../components/MarriageCountdown";
import Wardrobe from "../components/Wardrobe";
import Weather from "../components/Weather";
export default function LadkaSecondDetails() {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="relative left-1/2 flex w-screen max-w-none -translate-x-1/2 flex-col items-center text-center bg-[url('/assets/ladkadetailsection_bg.webp')] bg-cover bg-no-repeat pt-20 md:pt-30">
      <ScratchText onReveal={() => setRevealed(true)} />

      {revealed && (
        <div className="countdown-fade-in">
          <MarriageCountdown />
        </div>
      )}
      <Wardrobe />

      <div
        id="rsvp"
        className="md:w-1/3 lg:w-1/5 w-2/3 min-h-[420px] md:min-h-[420px]  lg:min-h-[480px] 3xl:min-h-[600px]  bg-[url('/assets/rsvp_bg.webp')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center px-4 py-12"
      >
        <h2 className="text-[22px] md:text-2xl lg:text-[30px] text-center text-[#775A19] px-6 md:px-8 leading-6 md:leading-8 jacques-francois-regular">
          Awaiting the Pleasure of Your Company
        </h2>

        {/* <p className="md:text-xl text-[15px] text-[#775A19] text-center mt-3 jacques-francois-regular">
          Click the link to RSVP
        </p> */}
        <p className="lg:text-xl text-[15px] text-[#775A19] text-center mt-3 jacques-francois-regular">
          Click the{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3NmbXylgsS7hgyhU5-uCeEgOr9D0mKrviQLYkiQCxm1u2bQ/viewform?usp=sharing&ouid=111123382395927427405"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            link
          </a>{" "}
          to RSVP
        </p>

        {/* <img
            src="/assets/whatsapp.png"
            alt="Shree Ganesh"
            className="w-[40px]"
          /> */}
      </div>

      <Weather />
      <img
        src="/assets/bottom_img.webp"
        alt="Mata Image"
        className="relative left-1/2 block w-screen max-w-none -translate-x-1/2"
      />


      <div className="flex flex-col justify-center items-center mt-6 mb-14">
          <a
            href="https://invitearc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center"
          >
            {" "}
            <img
              src="/assets/logon.png"
              alt="Wedding Logo"
              className="md:w-17 w-13"
            />
          </a>

          <a
            href="https://www.instagram.com/theinvitearc/"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-3 font-serif text-[16px] md:text-[18px] text-[#775A19] mt-2"
          >
            <img
              src="/assets/insta.png"
              alt="Instagram"
              className="object-contain h-4 w-5"
            />

            <span>Follow us on Instagram</span>
          </a>
        </div>
    </div>
  );
}
