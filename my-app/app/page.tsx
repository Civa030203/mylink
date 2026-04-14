"use client";

import React from "react";
import { Briefcase, Mail, ArrowRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const links = [
    { name: "Portfolio", url: "#", icon: Briefcase, bgColor: "bg-yellow-300 dark:bg-yellow-400" },
    { name: "GitHub", url: "#", icon: GithubIcon, bgColor: "bg-pink-300 dark:bg-pink-400" },
    { name: "LinkedIn", url: "#", icon: LinkedinIcon, bgColor: "bg-blue-300 dark:bg-blue-400" },
    { name: "Twitter / X", url: "#", icon: TwitterIcon, bgColor: "bg-green-300 dark:bg-green-400" },
    { name: "Contact Me", url: "mailto:hello@example.com", icon: Mail, bgColor: "bg-orange-300 dark:bg-orange-400" },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4E0] dark:bg-[#1E1E1E] text-black dark:text-white font-sans p-6 md:p-10 lg:p-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-16 lg:gap-20 items-center lg:items-start pt-10 lg:pt-24 pb-20">

        {/* Left Side: Intro */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          <div className="inline-block border-4 border-black dark:border-white bg-white dark:bg-zinc-800 px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transform -rotate-2">
            <span className="text-xl font-bold uppercase tracking-widest text-black dark:text-white">
              Software Engineer
            </span>
          </div>

          <h1 className="text-7xl sm:text-8xl lg:text-[7rem] font-black text-black dark:text-[#FFF4E0] tracking-tighter uppercase drop-shadow-[6px_6px_0_rgba(255,100,100,1)] dark:drop-shadow-[6px_6px_0_rgba(200,50,50,1)]">
            주승제
          </h1>

          <div className="bg-cyan-200 dark:bg-cyan-800 border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] max-w-md transform rotate-1 mt-6">
            <p className="text-2xl lg:text-3xl font-bold text-black dark:text-white leading-tight">
              실시간으로 AI때문에 큰일난 소프트웨어과 대학생입니다.
            </p>
            <div className="mt-4 inline-block bg-yellow-300 dark:bg-yellow-500 px-3 py-1 border-4 border-black dark:border-white shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#FFF]">
              <span className="text-xl font-black text-black">아하하 🚀</span>
            </div>
          </div>

          <div className="text-xl lg:text-2xl font-bold border-b-4 border-black dark:border-white pb-2 px-2 mt-8 inline-block">
            @seungjeajoo
          </div>
        </div>

        {/* Right Side: Links */}
        <div className="w-full lg:w-7/12 flex flex-col gap-6 lg:gap-8 w-full max-w-lg lg:max-w-none ml-auto">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center justify-between border-4 border-black dark:border-white ${link.bgColor} p-5 lg:p-7 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-black dark:focus:ring-white`}
              >
                <div className="flex items-center gap-5 lg:gap-8">
                  <div className="border-r-4 border-black dark:border-zinc-800 pr-5 lg:pr-8">
                    <Icon size={36} strokeWidth={3} className="text-black" />
                  </div>
                  <span className="text-2xl lg:text-4xl font-black uppercase tracking-wider text-black">
                    {link.name}
                  </span>
                </div>

                <div className="bg-white border-4 border-black rounded-full p-2 group-hover:rotate-45 transition-transform duration-300 flex-shrink-0">
                  <ArrowRight size={28} strokeWidth={4} className="text-black" />
                </div>
              </a>
            );
          })}
        </div>

      </div>

      {/* Footer */}
      <div className="mt-12 pb-6 text-center">
        <p className="text-lg font-black tracking-[0.4em] uppercase text-black dark:text-white border-t-4 border-black dark:border-white max-w-sm mx-auto pt-6 inline-block">
          Made with ✨ By You
        </p>
      </div>
    </div>
  );
}
