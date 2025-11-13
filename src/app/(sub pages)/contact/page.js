"use client";

import Image from "next/image";
import bg from "../../../../public/background/contact.png";
import Form from "@/components/contact/Form";

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website&apos;s contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          {/* Title with Waving Hand replacing exclamation mark */}
          <div className="relative">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
              Contact Me
              <span className="ml-2 inline-block animate-wave-final">👋</span>
            </h1>
          </div>
          <p className="text-center font-light text-sm xs:text-base">
            &quot;Have a project in mind that needs that special touch?&quot;
            <br />
            I&apos;m always excited to collaborate on new creative ventures and
            bring fresh ideas to life. Whether it&apos;s a website, application,
            or digital experience, let&apos;s join forces to create something
            truly remarkable. Send me a message and let&apos;s start our
            creative journey together.
          </p>
        </div>

        {/* Contact Information Display */}
        <div className="w-full max-w-md bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-accent/30">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-semibold text-accent">Get In Touch</h2>

            <div className="space-y-3 text-foreground">
              <div className="flex items-center justify-center space-x-3">
                <span className="font-medium">Name:</span>
                <span>Bishal Poudel Khatri</span>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <span className="font-medium">Email:</span>
                <a
                  href="mailto:your.email@example.com"
                  className="text-accent hover:underline transition-colors"
                >
                  bishal.heh.khatri@gmail.com
                </a>
              </div>

              <p className="text-sm text-foreground/80 mt-4">
                Feel free to reach out to me directly via email. I&apos;ll get
                back to you as soon as possible!
              </p>
            </div>
          </div>
        </div>

        {/* Form Container with Pointing Hand - Removed since we don't need the form anymore */}
        {/* <div className="relative w-full max-w-md">
          <div className="absolute -left-10 top-0 z-30 pointer-events-none">
            <div className="text-2xl animate-point-final">👉</div>
          </div>
          <Form />
        </div> */}
      </article>

      <style jsx global>{`
        @keyframes wave-final {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(-15deg) scale(1.1);
          }
          50% {
            transform: rotate(0deg) scale(1);
          }
          75% {
            transform: rotate(10deg) scale(1.05);
          }
        }

        @keyframes point-final {
          0%,
          100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(3px);
          }
        }

        .animate-wave-final {
          animation: wave-final 3s ease-in-out infinite;
          display: inline-block;
        }

        .animate-point-final {
          animation: point-final 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
