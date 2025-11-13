import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            About Me
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Computer Science student at IIMS College affiliated with Taylor&apos;s
            University specializing in cybersecurity, UI/UX design, and web
            application development. Experienced in building secure
            authentication systems, real estate web apps, and conducting
            penetration testing (VAPT). Skilled in front-end and back-end
            development, UI/UX design, and cybersecurity practices, with strong
            adaptability and problem-solving abilities. Passionate about
            creating secure, user-friendly digital solutions that balance
            functionality with trust. Passionate about designing secure,
            user-centric and high-performing digital experiences while
            leveraging marketing tools to increase online presence and
            engagement. Skilled in identifying security risks, building brand
            visuals and managing digital campaigns that merge technology,
            creativity and data-driven strategies.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+ <sub className="font-semibold text-base">Clients & Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2.5+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=react,python,linux,github,nodejs,firebase,php,figma,aws,blender`}
            alt="Skill icons"
            width={800}
            height={200}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/HEH222"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="GitHub project stats"
              width={800}
              height={300}
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
