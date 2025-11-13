import Image from "next/image";
import bg from "../../../../public/background/about.png";
import RenderModel from "@/components/RenderModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Background */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* Model + Name Section */}
      <div className="w-full flex flex-col items-center justify-center py-6">
        <div className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]">
          {/* Increased size of model container */}
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>

        {/* Name just below model */}
        <h1 className="font-bold text-2xl sm:text-3xl text-accent mt-2">
          Bishal Poudel Khatri
        </h1>
        <p className="font-light text-foreground text-lg">
          Meet the Man behind this portfolio
        </p>
      </div>

      {/* About Details */}
      <AboutDetails />
    </>
  );
}