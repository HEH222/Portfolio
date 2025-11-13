import Image from "next/image";
import bg from "../../public/background/hhome-background-new.png";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
const Wizard = dynamic(() => import("@/components/models/Wizard"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative font-inter">
      <Image
        priority
        sizes="90vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-60"
      />

      <div className="w-full h-screen relative">
        <Navigation />
        <RenderModel>
          <Wizard />
        </RenderModel>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Left Side - Hello I'm & Description */}
          <div className="absolute left-8 lg:left-16 xl:left-24 top-1/3 pointer-events-none">
            <div className="opacity-90">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:0.5s] text-white mb-6 lg:mb-8">
                  Hello
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:1.0s] text-yellow-400">
                  I&apos;m
                </span>
              </h2>

              {/* Description below Hello I'm */}
              <div className="mt-12 lg:mt-16">
                <p className="text-lg lg:text-xl xl:text-2xl text-yellow-400 opacity-0 animate-slide-up-bounce [animation-delay:3.0s]">
                  Full Stack Developer
                </p>
                <p className="text-lg lg:text-xl xl:text-2xl text-white opacity-0 animate-slide-up-bounce [animation-delay:3.5s]">
                  & 3D Enthusiast
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Bishal Poudel Khatri */}
          <div className="absolute right-8 lg:right-16 xl:right-24 top-1/3 pointer-events-none">
            <div className="opacity-90 text-right">
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:1.5s] text-white mb-6 lg:mb-8">
                  Bishal
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:2.0s] text-yellow-400 mb-6 lg:mb-8">
                  Poudel
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:2.5s] text-white">
                  Khatri
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Split Left & Right */}
        <div className="md:hidden absolute bottom-20 left-0 w-full px-6 pointer-events-none">
          <div className="flex justify-between items-start">
            {/* Left Side - Hello I'm */}
            <div className="opacity-90">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:0.5s] text-white">
                  Hello
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:1.0s] text-yellow-400">
                  I&apos;m
                </span>
              </h2>
            </div>

            {/* Right Side - Bishal Poudel Khatri */}
            <div className="opacity-90 text-right">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:1.5s] text-white">
                  Bishal
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:2.0s] text-yellow-400">
                  Poudel
                </span>
                <span className="block opacity-0 animate-slide-up-bounce [animation-delay:2.5s] text-white">
                  Khatri
                </span>
              </h2>
            </div>
          </div>

          {/* Description - Below both sides centered */}
          <div className="mt-6 w-full text-center opacity-80">
            <p className="text-base sm:text-lg text-yellow-400 opacity-0 animate-slide-up-bounce [animation-delay:3.0s]">
              Full Stack Developer
            </p>
            <p className="text-base sm:text-lg text-white opacity-0 animate-slide-up-bounce [animation-delay:3.5s]">
              & 3D Enthusiast
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
