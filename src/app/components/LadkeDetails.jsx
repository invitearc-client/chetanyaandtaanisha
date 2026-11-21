"use client";
import LadkaSecondDetails from "../components/LadkaSecondDetails";
import Events from "../components/Events";

export default function LadkeDetails() {
  return (
    <>
      <div className="mx-auto w-full max-w-4xl text-center px-4">
        <p className="text-[17px] md:text-2xl text-[#F6F0E4] font-cormorant-garamond">
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
        </p>
        <div className="mt-8 text-center">
          <h2 className="text-[#F6F0E4] tangerine-regular text-center mt-14 md:text-4xl text-[38px] lg:text-[60px] leading-tight font-bold">
            CHETANYA
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond md:text-2xl mt-2 text-[14px]">
            (Son of Mrs. Jyoti & Mr. Sanjay Koti)
          </p>

          <h2 className="text-[#F6F0E4] text-center text-[38px] sm:text-7xl lg:text-[60px] leading-tight font-bold tangerine-regular">
            <span className="text-[#F6F0E4] font-cormorant-garamond text-center md:text-3xl text-[28px] lg:text-[36px] leading-tight font-medium">
              Weds
            </span>
            <br />
            TAANISHA
          </h2>

          <p className="text-[#F6F0E4] font-cormorant-garamond  md:text-2xl mt-2 text-[14px]">
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
