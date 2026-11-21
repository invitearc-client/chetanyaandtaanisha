"use client";

export default function LadkiEvents() {
  return (
     
    <div
      id="itinerary"
      className="flex w-full min-w-0 scroll-mt-6 flex-col justify-center mt-20 lg:mt-40 items-center  md:relative md:left-1/2 lg:w-[calc(90vw-3rem)] 3xl:w-[calc(75vw-3rem)] md:max-w-none md:-translate-x-1/2"
    >
      <p className="md:text-4xl text-[24px] text-[#F6F0E4] parisienne-regular">
        On the following events
      </p>

      <div className="grid w-full min-w-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-12 gap-12 md:gap-8 pt-10 md:px-10">

        {/* Mata ki Chowki */}
        {/* <div className="relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/mata_img.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-10"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Mata ki Chowki
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            26th January 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            10:00 AM Onwards
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-sm lg:text-base px-4 md:px-0 leading-5 max-w-[650px]">
            Join us for an afternoon of prayers, bhajan & dance, as we seek
            divine blessings of MataRani to commence the Wedding Celebration of
            Chetanya & Taanisha
          </p>

          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            CHOWKI VENUE
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            GNH Conventions
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Sohna Road, Gurugram
          </p>
        </div> */}

        {/* Mehendi ki Mehfil */}
        <div className="relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/mehandi_img.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-1"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Mehendi ki <br /> Mehfil
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            30th January 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            12:00 PM Onwards
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

          

          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            MEHENDI VENUE
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            Recreational Center
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            DLF Capital Green, Moti Nagar, Delhi
          </p>
        </div>

        {/* Haldi Hungama Gharoli */}
        <div className="relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/haldi_img.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-10"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Haldi Hungama
           
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            1st Feb 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            11AM
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />


          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            POOLSIDE
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            Umaid Palace
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Jaipur-Agra National Highway <br />
            Dausa, Rajasthan
          </p>
        </div>

        {/* Jashn e Sagan */}
        <div className="relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/jasn.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-1"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Jashn e Sagan
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            1st Feb 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            7PM Onwards
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

       

          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            MAHARAJA BAGH
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            Umaid Palace
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Jaipur-Agra National Highway <br />
            Dausa, Rajasthan
          </p>
        </div>

        {/* Din Shagna Da */}

        <div className="relative w-full min-h-130 md:min-h-135 lg:min-h-145 3xl:min-h-140  flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/din.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-10"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Din Shagna Da
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            2nd Feb 2027
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

          <div className="w-full flex flex-col gap-2 px-11">
            <div className="flex justify-between items-center bg-[#FFF0D9] border border-[#E8C99E] rounded-md px-3 py-1.5">
              <div className="flex flex-col items-start text-left">
                <h3 className="font-cormorant-garamond text-[#805719] text-[14px] md:text-[15px] leading-tight">
                  Breakfast
                </h3>
                <p className="font-cormorant-garamond text-[#A17A3F] text-[12px] md:text-[13px] leading-tight">
                  The Haveli Verandah
                </p>
              </div>
              <p className="font-cormorant-garamond text-[#805719] text-[14px] tracking-[3px]">
                08 AM
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#FFF0D9] border border-[#E8C99E] rounded-md px-3 py-1.5">
              <div className="flex flex-col items-start text-left">
                <h3 className="font-cormorant-garamond text-[#805719] text-[14px] md:text-[15px] leading-tight">
                  Chooda Ceremony
                </h3>
                <p className="font-cormorant-garamond text-[#A17A3F] text-[12px] md:text-[13px] leading-tight">
                  Deck
                </p>
              </div>
              <p className="font-cormorant-garamond text-[#805719] text-[14px] tracking-[3px]">
                8 AM
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#FFF0D9] border border-[#E8C99E] rounded-md px-3 py-1.5">
              <div className="flex flex-col items-start text-left">
                <h3 className="font-cormorant-garamond text-[#805719] text-[14px] md:text-[15px] leading-tight">
                  Wedding
                </h3>
                <p className="font-cormorant-garamond text-[#A17A3F] text-[12px] md:text-[13px] leading-tight">
                  Maharani Bagh
                </p>
              </div>
              <p className="font-cormorant-garamond text-[#805719] text-[14px] tracking-[3px]">
                12 PM
              </p>
            </div>

            <div className="flex justify-between items-center bg-[#FFF0D9] border border-[#E8C99E] rounded-md px-3 py-1.5">
              <div className="flex flex-col items-start text-left">
                <h3 className="font-cormorant-garamond text-[#805719] text-[14px] md:text-[15px] leading-tight">
                  Phere
                </h3>
                <p className="font-cormorant-garamond text-[#A17A3F] text-[12px] md:text-[13px] leading-tight">
                  Baori
                </p>
              </div>
              <p className="font-cormorant-garamond text-[#805719] text-[14px] tracking-[3px]">
                03 PM
              </p>
            </div>
          </div>

          {/* <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            CHOWKI VENUE
          </p> */}

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[18px] lg:text-xl mt-1">
            Umaid Palace
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Jaipur-Agra National Highway <br />
            Dausa, Rajasthan
          </p>
        </div>

        {/* The Final Bet */}
        <div className="relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/final.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-1"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            The Final Bet
          </h2>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl mt-1">
            2nd Feb 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            8PM Onwards
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            THE BALLROOM
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            Umaid Palace
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Jaipur-Agra National Highway <br />
            Dausa, Rajasthan
          </p>
        </div>

        {/* Vidaai */}
     
         <div className=" relative w-full min-h-119 md:min-h-119 lg:min-h-129 flex flex-col bg-[url('/assets/event_bg.webp')] rounded-2xl px-5  md:px-8 bg-no-repeat bg-center bg-[length:100%_100%] justify-center items-center text-center">
          <img
            src="/assets/vidaai.png"
            alt="Mata Image"
            className="w-[60px] shrink-0 mt-1"
          />

          <h2 className="text-[#775A19] jacques-francois-regular text-[26px] md:text-[25px] lg:text-[30px] mt-2">
            Vidaai
          </h2>
          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px] mt-1">
            Breakfast
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[18px] md:text-[17px] lg:text-xl ">
            3rd Feb 2027
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-[15px] md:text-[14px] lg:text-[15px]">
            8am Onwards
          </p>

          <img
            src="/assets/element4.png"
            alt="Decorative Element"
            className="w-[140px] md:w-[180px] py-3 shrink-0"
          />

          <div className="w-[200px] border-b border-[#E8D1AF] my-3" />

          <p className="text-[#775A19] jacques-francois-regular text-sm  md:text-[13px] lg:text-[15px] mt-2">
            VIDAAI VENUE
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-xl md:text-[18px] lg:text-xl mt-1">
            Umaid Palace
          </p>

          <p className="text-[#775A19] jacques-francois-regular text-sm md:text-[13px] lg:text-base mt-1">
            Jaipur-Agra National Highway <br />
            Dausa, Rajasthan
          </p>
       
       </div>
      </div>






    </div>
 
   
  );
}
