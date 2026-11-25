"use client";

export default function Weather() {
  return (
    <section
      id="weather"
      className="w-full scroll-mt-6 px-0 md:px-10 flex flex-col items-center gap-16 mt-10"
    >
      <div className="w-full px-5 py-10 md:px-12 md:py-12 text-center">
        {/* Weather Heading */}

        <h2
          className="text-[#775A19] jacques-francois-regular text-center
            md:text-5xl text-[26px] lg:text-[60px] leading-tight mt-2"
        >
          WEATHER
        </h2>
        <div className="w-20 h-[1px] bg-[#B58A42] mx-auto mt-2 mb-4"></div>

        <p className="jacques-francois-regular text-sm md:text-[20px] text-[#775A19] max-w-md mx-auto">
          January and February bring sunny days, pleasant afternoons and cool
          desert evenings.
        </p>

        {/* Weather Cards */}

        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-8 max-w-3xl mx-auto mt-8">
          {[
            //   {
            //   day: "Sunday",
            //   date: "31",
            //   month: "JAN 2027",
            //   temp: "26°C",
            //   weather: "12°",
            //   icon: "/assets/sun2.webp",
            // },
          
            {
              day: "Monday",
              date: "01",
              month: "FEB 2027",
              temp: "26°C",
              weather: "10°",
              icon: "/assets/sun1.webp",
            },
            {
              day: "Tuesday",
              date: "02",
              month: "FEB 2027",
              temp: "26°C",
              weather: "10°",
              icon: "/assets/sun2.webp",
            },
            {
              day: "Wednesday",
              date: "03",
              month: "FEB 2027",
              temp: "26°C",
              weather: "10°",
              icon: "/assets/sun2.webp",
            },
          ].map((item, index) => (
         
            <div
              key={index}
              className="flex flex-col items-center justify-center text-[#775A19] w-[calc(30%-1rem)] md:w-[calc(20%-1.5rem)]"
            >
              <p className="text-[10px] md:text-[14px] tracking-[3px]">
                {item.day}
              </p>

              <h3 className="font-cormorant-garamond text-[30px] md:text-3xl lg:text-4xl mt-1">{item.date}</h3>

              <p className="text-[9px]  md:text-[14px] tracking-[2px]">
                {item.month}
              </p>
              <img src={item.icon} alt="Shree Ganesh" className="w-full py-2" />

              <h3 className="font-cormorant-garamond text-2xl md:text-3xl lg:text-4xl">
                {item.temp}
              </h3>

              <p className="text-[#ad945e] text-xl md:text-2xl  mt-1">{item.weather}</p>
            </div>
          ))}
        </div>

        {/* Bottom Invitation Text */}
        <div className="mt-24 md:mt-28 max-w-4xl mx-auto text-[#775A19]">
          <p className="jacques-francois-regular text-sm md:text-base leading-relaxed">
            As we begin this beautiful new chapter together, it would mean the
            world to have you by our side. Your presence, love and blessings
            will make these moments even more special.
          </p>

          <p className="jacques-francois-regular text-sm md:text-base leading-relaxed mt-3">
            We look forward to celebrating together, creating memories and
            sharing the joy of this occasion with all those who mean so much to
            us.
          </p>

          <div className="text-2xl mt-3">♥</div>

          <p className="jacques-francois-regular text-sm md:text-2xl mt-3">
            With love,
          </p>

          <h2 className="parisienne-regular text-2xl md:text-5xl mt-4 font-semibold">
            Dadke and Nanke
          </h2>




     <div className="flex flex-col justify-center items-center mt-8">
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
      </div>
    </section>
  );
}
