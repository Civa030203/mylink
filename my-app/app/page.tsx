"use client";

import Image from "next/image";
import { Briefcase, Mail, ChevronRight } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const links = [
    { name: "Portfolio", url: "#", icon: Briefcase, color: "from-blue-500 to-teal-400 dark:from-blue-600 dark:to-teal-500" },
    { name: "GitHub", url: "#", icon: GithubIcon, color: "from-zinc-700 to-zinc-900 dark:from-zinc-600 dark:to-zinc-800" },
    { name: "LinkedIn", url: "#", icon: LinkedinIcon, color: "from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700" },
    { name: "Twitter / X", url: "#", icon: TwitterIcon, color: "from-sky-400 to-blue-500 dark:from-sky-500 dark:to-blue-600" },
    { name: "Contact Me", url: "mailto:hello@example.com", icon: Mail, color: "from-rose-400 to-red-500 dark:from-rose-500 dark:to-red-600" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 selection:bg-purple-500/30">
      {/* Animated Mesh Gradient Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-[100px] mix-blend-multiply dark:from-indigo-900/40 dark:via-purple-900/40 dark:to-pink-900/40 dark:mix-blend-screen animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-400/30 blur-[120px] mix-blend-multiply dark:from-cyan-900/30 dark:to-blue-900/30 dark:mix-blend-screen animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-fuchsia-400/30 to-rose-400/30 blur-[130px] mix-blend-multiply dark:from-fuchsia-900/30 dark:to-rose-900/30 dark:mix-blend-screen animate-blob animation-delay-4000" />
      </div>

      <main className="relative z-10 flex w-full max-w-md flex-col items-center p-6 sm:p-8 perspective-1000">
        {/* Dynamic Glassmorphism Profile Container */}
        <div className="w-full rounded-[2.5rem] bg-white/60 dark:bg-zinc-900/60 p-8 pt-10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-2xl border border-white/60 dark:border-white/10 transition-all duration-500 hover:shadow-2xl">

          {/* Profile Header section */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="relative group cursor-pointer">
              {/* Outer rotating glow effect */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-70 group-hover:opacity-100 blur-md transition-all duration-700 animate-spin-slow group-hover:animate-none"></div>
              {/* Inner Avatar */}
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-[3px] border-white/90 dark:border-zinc-800/90 shadow-2xl bg-zinc-200">
                <Image
                  src="/profile.png"
                  alt="Profile picture"
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  priority
                />
              </div>
            </div>

            <div className="transform transition-all duration-500 translate-y-0 group-hover:-translate-y-1">
              <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white mt-1 drop-shadow-sm">
                주승제
              </h1>
              <div className="mt-3 inline-flex items-center px-4 py-1.5 rounded-full bg-zinc-900/5 dark:bg-white/10 border border-zinc-900/10 dark:border-white/10 shadow-inner">
                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500 dark:from-purple-400 dark:to-pink-300">
                  @seungjeajoo
                </span>
              </div>
              <p className="text-[15px] font-medium text-zinc-600 dark:text-zinc-300 mt-5 max-w-[280px] mx-auto leading-relaxed">
                실시간으로 AI때문에 큰일난 소프트웨어과 대학생입니다. <br /> 아하하 🚀
              </p>
            </div>
          </div>

          {/* Link Cards Section */}
          <div className="mt-10 flex flex-col gap-4 w-full relative z-20">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex w-full items-center justify-between rounded-2xl bg-white/70 dark:bg-zinc-800/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--shadow-color)] border border-white/80 dark:border-white/5 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Subtle Link Card Shine Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-[0.08] dark:group-hover:opacity-[0.15] transition-opacity duration-300`}></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                  <div className="relative flex items-center gap-4 z-10">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} text-white shadow-md transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon size={22} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-[16px] text-zinc-700 dark:text-zinc-200 transition-colors group-hover:text-zinc-900 dark:group-hover:text-white tracking-wide">
                      {link.name}
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-700 text-zinc-400 opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-zinc-900 dark:group-hover:text-zinc-50 group-hover:bg-white dark:group-hover:bg-zinc-600 shadow-sm">
                    <ChevronRight size={18} strokeWidth={3} />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-12 flex justify-center items-center pb-2">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 transition-colors hover:text-purple-500 cursor-default">
              Made with ✨ By You
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}
