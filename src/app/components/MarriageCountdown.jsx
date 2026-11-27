"use client";
import { useEffect, useState } from "react";

export default function MarriageCountdown() {
  const TARGET_DATE = new Date("2027-02-02").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const diff = TARGET_DATE - now;

      if (diff <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[url('/assets/bg_four.webp')] bg-cover bg-center py-8">
      <h2 className="text-[40px] md:text-5xl lg:text-[50px] text-center text-white parisienne-regular mb-4">
        Countdown
      </h2>

      {/* <div className="w-full max-w-[1000px] mx-auto bg-[url('/assets/countdown-bg.png')] bg-no-repeat bg-center bg-[length:80%_100%] md:bg-[length:100%_100%] aspect-[527/159] min-h-[145px] relative"> */}
      <div className="w-full md:w-160 max-w-[1200px] lg:max-w-[1800px] mx-auto bg-[url('/assets/countdown-bg.png')] bg-no-repeat bg-center bg-[length:80%_100%] md:bg-[length:100%_100%] aspect-[527/159] md:min-h-[145px] min-h-[140px] relative">
        {/* Days */}
        <div className="absolute md:left-[17.5%] left-[24%] md:top-[20%] top-[22%] -translate-x-1/2 flex items-center justify-center w-[18%]">
          <span className="font-cormorant-garamond text-[#775A19] text-[22px] sm:text-3xl md:text-4xl lg:text-[30px] leading-none tabular-nums">
            {timeLeft.days}
          </span>
        </div>

        {/* Hours */}
        <div className="absolute md:left-[39%] left-[41%] md:top-[20%] top-[22%] -translate-x-1/2 flex items-center justify-center w-[18%]">
          <span className="font-cormorant-garamond text-[#775A19] text-[22px] sm:text-3xl md:text-4xl lg:text-[30px] leading-none tabular-nums">
            {timeLeft.hours}
          </span>
        </div>

        {/* Minutes */}
        <div className="absolute md:left-[60%] left-[58%] md:top-[20%] top-[22%] -translate-x-1/2 flex items-center justify-center w-[18%]">
          <span className="font-cormorant-garamond text-[#775A19] text-[22px] sm:text-3xl md:text-4xl lg:text-[30px] leading-none tabular-nums">
            {timeLeft.minutes}
          </span>
        </div>

        {/* Seconds */}
        <div className="absolute left-[76%] md:left-[82%] md:top-[20%] top-[22%] -translate-x-1/2 flex items-center justify-center w-[18%]">
          <span className="font-cormorant-garamond text-[#775A19] text-[22px] sm:text-3xl md:text-4xl lg:text-[30px] leading-none tabular-nums">
            {timeLeft.seconds}
          </span>
        </div>
      </div>
    </section>
  );
}
