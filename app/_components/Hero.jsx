import React from "react";
import Image from "next/image";

function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh" }}>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
        }}
      >
        <defs>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#AEC670" />
            <stop offset="100%" stopColor="#ff00" />
          </radialGradient>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#344C11" />
            <stop offset="100%" stopColor="#ff00" />
          </radialGradient>
          <radialGradient
            id="Gradient1"
            cx="50%"
            cy="50%"
            fx="10%"
            fy="50%"
            r=".5"
          >
            <animate
              attributeName="fx"
              dur="34s"
              values="0%;3%;0%"
              repeatCount="indefinite"
            />
            <stop offset="0%" stopColor="#1A2902" />
            <stop offset="100%" stopColor="#ff00" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient1)">
          <animate
            attributeName="x"
            dur="20s"
            values="25%;0%;25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="21s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="17s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient2)">
          <animate
            attributeName="x"
            dur="23s"
            values="-25%;0%;-25%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="24s"
            values="0%;50%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="18s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#Gradient3)">
          <animate
            attributeName="x"
            dur="25s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            dur="26s"
            values="0%;25%;0%"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="360 50 50"
            to="0 50 50"
            dur="19s"
            repeatCount="indefinite"
          />
        </rect>
      </svg>

      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <section>
          <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  alt=""
                  src="/relaxing.jpg"
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div class="lg:py-24">
                <h2 class="text-3xl font-bold sm:text-4xl">
                Finde deinen Spezialisten
                </h2>

                <p class="mt-4 text-gray-600">
                  Willkommen bei Beauty Booking - der Plattform, auf der
                  Schönheit ihren Meister findet! Bei uns ist jeder Meister
                  nicht nur ein Handwerker, sondern ein echter Künstler, der die
                  Kunst der Pflege für Sie beherrscht. Wir bieten Meistern eine
                  einzigartige Möglichkeit, ihre Dienstleistungen zu
                  präsentieren, ihren Stil und ihre Fähigkeiten zu betonen, neue
                  Kunden anzuziehen und ihren Stammkundenkreis zu erweitern. Auf
                  Beauty Booking finden Sie ein breites Spektrum an
                  Dienstleistungen - von Hautpflege bis Make-up, von Maniküre
                  bis Haarstyling. Treten Sie unserer Gemeinschaft bei, um die
                  besten Meister zu entdecken und den perfekten Spezialisten zu
                  finden, der Ihren Tag noch schöner macht
                </p>

                <a
                  href="#"
                  class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Ваш контент здесь */}
      </div>
    </section>
  );
}

export default Hero;

