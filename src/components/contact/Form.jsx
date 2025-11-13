"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function ContactInfo() {
  const contactInfo = {
    name: "Bishal Poudel Khatri",
    email: "bishal.heh.khatri@gmail.com",
    phone: "+977-9812345678",
    location: "Kathmandu, Nepal",
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-md bg-background/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-accent/30"
    >
      <motion.h2
        variants={item}
        className="text-2xl font-semibold text-accent text-center mb-6"
      >
        Get In Touch
      </motion.h2>

      <div className="space-y-4 text-foreground">
        <motion.div variants={item} className="flex items-center space-x-3">
          <span className="font-medium min-w-16">Name:</span>
          <span>{contactInfo.name}</span>
        </motion.div>

        <motion.div variants={item} className="flex items-center space-x-3">
          <span className="font-medium min-w-16">Email:</span>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-accent hover:underline transition-colors"
          >
            {contactInfo.email}
          </a>
        </motion.div>

        {contactInfo.phone && (
          <motion.div variants={item} className="flex items-center space-x-3">
            <span className="font-medium min-w-16">Phone:</span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="text-accent hover:underline transition-colors"
            >
              {contactInfo.phone}
            </a>
          </motion.div>
        )}

        {contactInfo.location && (
          <motion.div variants={item} className="flex items-center space-x-3">
            <span className="font-medium min-w-16">Location:</span>
            <span>{contactInfo.location}</span>
          </motion.div>
        )}

        <motion.p
          variants={item}
          className="text-sm text-foreground/80 mt-6 text-center"
        >
          Feel free to reach out via email or phone — I’ll respond as soon as possible.
        </motion.p>
      </div>
    </motion.div>
  );
}
