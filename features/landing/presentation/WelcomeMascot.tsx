"use client";

import Image from "next/image";
import { motion } from "motion/react";

type WelcomeMascotProps = {
  message?: string;
};

const DEFAULT_MESSAGE = "Hi, I'm Sara! eŠkolica helps primary school kids learn English through fun interactive lessons. ✨";

export function WelcomeMascot({ message = DEFAULT_MESSAGE }: WelcomeMascotProps) {
  return (
    <div className="welcome-mascot" aria-hidden="true">
      <motion.div
        className="welcome-mascot__figure"
        initial={{ opacity: 0, y: 26, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* inner wrapper floats continuously once the entrance animation settles */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3.2, delay: 0.7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            className="welcome-mascot__image"
            src="/Photoroom_20260918_081629.PNG"
            alt=""
            width={1503}
            height={1422}
            priority
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="welcome-mascot__bubble"
        initial={{ opacity: 0, y: 12, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
      >
        <p>{message}</p>
      </motion.div>
    </div>
  );
}
