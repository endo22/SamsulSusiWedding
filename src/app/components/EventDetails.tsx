"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface EventInfo {
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  mapUrl: string;
}

const EventDetails: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const events: EventInfo[] = [
    {
      title: "PEMBERKATAN",
      date: "Sabtu, 22 November 2025",
      time: "10.00 s/d Selesai",
      venue: "GMI FILADELFIA PANCURAN",
      address: "Dusun III Pancuran Pal 15 Pasar Rabu Rt.05/Rw.00,Desa Muara Merang ,Kec. Bayung Lencir ,Kab. Musi Banyuasin,Sumatera Selatan 30974",
      mapUrl: "https://www.google.com/maps/search/GMI+FILADELFIA+PANCURAN+Dusun+III+Pancuran+Pal+15+Pasar+Rabu+Muara+Merang+Bayung+Lencir+Musi+Banyuasin+Sumatera+Selatan"
    }
  ];

  const openMap = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative py-8 min-h-[100vh] -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Church.jpg"
          alt="Event Details Background"
          fill
          className="object-cover opacity-70"
          style={{
            filter: "brightness(0.7) blur(0.3px)",
            transform: `scale(${1 + scrollY * 0.0002})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease-out"
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Event Details Container */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-12">
          {events.map((event, index) => (
            <div key={index} className="text-center animate-fade-in-slow">
              {/* Event Title */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-serif tracking-wider drop-shadow-lg animate-zoom-in-delay-1">
                  {event.title}
                </h2>
                
                {/* Decorative ornament */}
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="text-white/80 text-2xl sm:text-3xl opacity-80 animate-wiggle">
                    ❦ ❦ ❦
                  </div>
                </div>
              </div>

              {/* Event Details Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 sm:p-8 mb-6 sm:mb-8 animate-slide-up-delay-2">
                {/* Date */}
                <div className="mb-4 sm:mb-6">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light drop-shadow-md animate-slide-in-left-delay-1">
                    {event.date}
                  </p>
                </div>

                {/* Time */}
                <div className="mb-6 sm:mb-8">
                  <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold drop-shadow-lg animate-slide-in-right-delay-2">
                    {event.time}
                  </p>
                </div>

                {/* Venue */}
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-3 sm:mb-4 drop-shadow-lg animate-slide-in-left-delay-3">
                    {event.venue}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed drop-shadow-md italic animate-slide-up-delay-4">
                    {event.address}
                  </p>
                </div>

                {/* Map Button */}
                <button
                  onClick={() => openMap(event.mapUrl)}
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gray-600/80 backdrop-blur-sm text-white font-bold text-sm sm:text-base rounded-full hover:bg-gray-500/80 transition-all duration-300 border border-gray-400/50 shadow-lg transform hover:scale-105 animate-zoom-in-delay-3 animate-pulse-gentle"
                >
                  <span className="mr-2">📍</span>
                  Lihat Lokasi
                </button>
              </div>

              {/* Decorative separator for between events */}
              {index < events.length - 1 && (
                <div className="flex justify-center py-4 sm:py-6">
                  <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60 animate-fade-in-slow"></div>
                </div>
              )}
            </div>
          ))}
          
          {/* Bible Verse Section */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 sm:p-8 lg:p-10">
              {/* Bible Quote */}
              <blockquote className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-light italic drop-shadow-md mb-4 sm:mb-6">
                &ldquo;Dan di atas semuanya itu: kenakanlah kasih, sebagai pengikat yang mempersatukan dan menyempurnakan. Hendaklah damai sejahtera Kristus memerintah dalam hatimu, karena untuk itulah kamu telah dipanggil menjadi satu tubuh. Dan bersyukurlah.&rdquo;
              </blockquote>
              
              {/* Bible Reference */}
              <cite className="text-lg sm:text-xl lg:text-2xl text-white font-serif not-italic drop-shadow-lg">
                Kolose 3:14-15
              </cite>
              
              {/* Decorative elements */}
              <div className="flex justify-center mt-4 sm:mt-6">
                <div className="text-white/60 text-lg sm:text-xl">
                  ✦ ✦ ✦
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;