"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function ScratchText({ onReveal }) {
  const canvasRef = useRef(null);
  const onRevealRef = useRef(onReveal);

  useEffect(() => {
    onRevealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const width = 670;
    const height = 130;

    canvas.width = width;
    canvas.height = height;

    // ==========================
    // GOLD FOIL BACKGROUND
    // ==========================

    const drawLayer = () => {
      ctx.globalCompositeOperation = "source-over";

      // Golden background
      const gradient = ctx.createLinearGradient(0, 0, width, height);

      gradient.addColorStop(0, "#C99A55");
      gradient.addColorStop(0.2, "#F8E5B3");
      gradient.addColorStop(0.5, "#DDB66F");
      gradient.addColorStop(0.8, "#F5DDA7");
      gradient.addColorStop(1, "#BD8B45");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Metallic shine
      const shine = ctx.createLinearGradient(0, 0, width, height);

      shine.addColorStop(0, "rgba(255,255,255,0.25)");
      shine.addColorStop(0.5, "rgba(255,245,205,0.55)");
      shine.addColorStop(1, "rgba(255,255,255,0.15)");

      ctx.fillStyle = shine;
      ctx.fillRect(0, 0, width, height);

      // Golden texture and sparkles
      for (let i = 0; i < 1000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2 + 0.5;

        ctx.fillStyle =
          Math.random() > 0.4
            ? "rgba(255,255,255,0.45)"
            : "rgba(120,75,20,0.15)";

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Outer border
      ctx.strokeStyle = "#A8793D";
      ctx.lineWidth = 5;
      ctx.strokeRect(5, 5, width - 10, height - 10);

      // Inner border
      ctx.strokeStyle = "rgba(255,245,210,0.8)";
      ctx.lineWidth = 2;
      ctx.strokeRect(14, 14, width - 28, height - 28);

      // Decorative corners
      const drawCorner = (x, y, sx, sy) => {
        ctx.save();

        ctx.translate(x, y);
        ctx.scale(sx, sy);

        ctx.fillStyle = "rgba(120,75,30,0.4)";
        ctx.font = "bold 23px Georgia";
        ctx.textAlign = "center";

        ctx.fillText("❧", 0, 15);

        ctx.restore();
      };

      drawCorner(28, 25, 1, 1);
      drawCorner(width - 28, 25, -1, 1);
      drawCorner(28, height - 25, 1, -1);
      drawCorner(width - 28, height - 25, -1, -1);

      // Main Heading
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.fillStyle = "#68401F";
      ctx.font = "bold 32px Georgia";

      ctx.fillText("✦  Scratch to Reveal  ✦", width / 2, 43);

      // Subtitle
      ctx.fillStyle = "#80552D";
      ctx.font = "italic 18px Georgia";

      ctx.fillText("A little surprise awaits...", width / 2, 78);

      ctx.globalCompositeOperation = "destination-out";
    };

    drawLayer();

    let drawing = false;
    let completed = false;

    let lastX = 0;
    let lastY = 0;

    // ==========================
    // REALISTIC SCRATCH BRUSH
    // ==========================

    const scratch = (x, y) => {
      ctx.save();

      ctx.globalCompositeOperation = "destination-out";

      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.lineWidth = 32;

      // Main scratch stroke
      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Soft erase
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, 22);

      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.7, "rgba(0,0,0,.8)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");

      ctx.fillStyle = gradient;

      ctx.beginPath();
      ctx.arc(x, y, 22, 0, Math.PI * 2);
      ctx.fill();

      // Random realistic chips
      for (let i = 0; i < 10; i++) {
        const rx = x + (Math.random() - 0.5) * 28;
        const ry = y + (Math.random() - 0.5) * 28;

        ctx.beginPath();
        ctx.arc(rx, ry, Math.random() * 4 + 1, 0, Math.PI * 2);
        ctx.fill();
      }

      // Tiny scratch lines
      for (let i = 0; i < 5; i++) {
        ctx.lineWidth = Math.random() * 2 + 1;

        ctx.beginPath();

        ctx.moveTo(
          x + (Math.random() - 0.5) * 20,
          y + (Math.random() - 0.5) * 20,
        );

        ctx.lineTo(
          x + (Math.random() - 0.5) * 35,
          y + (Math.random() - 0.5) * 35,
        );

        ctx.stroke();
      }

      lastX = x;
      lastY = y;

      ctx.restore();
    };

    // ==========================
    // AUTO REVEAL
    // ==========================

    const reveal = () => {
      if (completed) return;

      completed = true;

      console.log("REVEALED");

      onRevealRef.current?.();

      // First confetti
      confetti({
        particleCount: 300,
        spread: 100,
        startVelocity: 35,
        gravity: 0.8,
        scalar: 1,
        ticks: 250,
        origin: { x: 0.5, y: 0.5 },
        colors: [
          "#775A19",
          "#775A19",
          "#775A19",
          "#775A19",
          "#775A19",
          "#775A19",
        ],
      });

      // Second confetti
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 120,
          startVelocity: 18,
          gravity: 0.8,
          scalar: 0.6,
          origin: { x: 0.5, y: 0.5 },
          colors: ["#FFD700", "#FFF4B9", "#FFFFFF"],
        });
      }, 150);

      // Fade out canvas
      canvas.style.transition = "opacity .5s ease";
      canvas.style.opacity = "0";

      setTimeout(() => {
        ctx.clearRect(0, 0, width, height);
        canvas.style.display = "none";
      }, 500);
    };

    // ==========================
    // CHECK SCRATCH PROGRESS
    // ==========================

    const checkScratch = () => {
      if (completed) return;

      const imageData = ctx.getImageData(0, 0, width, height);

      const pixels = imageData.data;

      let transparent = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) transparent++;
      }

      const scratched = transparent / (width * height);

      // Reveal after 40%
      if (scratched > 0.2) {
        reveal();
      }
    };

    // ==========================
    // MOUSE / TOUCH POSITION
    // ==========================

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();

      const scaleX = width / rect.width;
      const scaleY = height / rect.height;

      const point = e.touches && e.touches.length ? e.touches[0] : e;

      return {
        x: (point.clientX - rect.left) * scaleX,
        y: (point.clientY - rect.top) * scaleY,
      };
    };

    // Start scratching
    const start = (e) => {
      if (completed) return;

      drawing = true;

      const pos = getPos(e);

      lastX = pos.x;
      lastY = pos.y;

      scratch(pos.x, pos.y);
      checkScratch();
    };

    // Move scratching
    const move = (e) => {
      if (!drawing || completed) return;

      e.preventDefault();

      const pos = getPos(e);

      scratch(pos.x, pos.y);
      checkScratch();
    };

    // Stop scratching
    const end = () => {
      drawing = false;
    };

    // Mouse events
    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);

    // Touch events
    canvas.addEventListener("touchstart", start, {
      passive: false,
    });

    canvas.addEventListener("touchmove", move, {
      passive: false,
    });

    window.addEventListener("touchend", end);

    // Cleanup
    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <div
      className="relative block w-full max-w-[350px] overflow-hidden rounded-md select-none mx-0 p-0"
      style={{
        aspectRatio: "670 / 140",
        lineHeight: 0,
      }}
    >
      {/* Hidden Text */}
      <div
        className="absolute inset-0 flex items-center justify-center border bg-white rounded-[12px]"
        style={{
          color: "#775A19",
          fontFamily: "EB Garamond, serif",
          fontWeight: 600,
          fontSize: "clamp(28px, 4.5vw, 30px)",
          letterSpacing: ".5px",
          textShadow: "0 1px 6px rgba(255,215,0,.35)",
        }}
      >
        2<sup className="text-[16px] pr-2">nd</sup> February
      </div>

      {/* Scratch Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block w-full h-full touch-none cursor-pointer"
        style={{
          margin: 0,
          padding: 0,
        }}
      />

      {/* Shine Animation */}
      <div className="absolute inset-0 pointer-events-none scratch-shine" />
    </div>
  );
}
