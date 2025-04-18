import React from "react";
import { motion } from "framer-motion";
import { David_Libre } from "next/font/google";
import PaperCup from "../papercup";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

function BubbleSection() {
  const breatheVariants = {
    animate: {
      scale: [1, 1.04, 1.02, 1],
      rotate: [4, -4, 0, 4],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.25, 0.75, 1]
      }
    }
  };

  // Rotate animation for the paper cup
  const rotateVariants = {
    animate: {
      rotate: [0, -4, 4, 0],
      transition: {
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        times: [0, 0.25, 0.75, 1]
      }
    }
  };
  return (
    <div className="bubble-section font-dela">
      <span>Our Comitment to Sustainability</span>
      <p className={`bubble-p ${david.className}`}>
        {
          "We take our responsibility to the planet seriously. From supporting eco-conscious farming practices to minimizing our environmental footprint, sustainability is woven into the fabric of our brand. With every cup, you can sip knowing you're part of a movement towards a greener future."
        }
      </p>
      <p className={`bubble-pmob ${david.className}`}>
        {
          "We take our responsibility to the planet seriously. With every cup, you can sip knowing you're part of a movement towards a greener future."
        }
      </p>
      <motion.div
        className="bubble-papercup-container"
        variants={rotateVariants}
        animate="animate"
      >
        <PaperCup
          className="bubble-papercup"
          width="74"
          height="101"
          style={{
            marginTop: 20,
            marginBottom: 20
          }}
        />
      </motion.div>
      
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="745"
        height="651"
        viewBox="0 0 745 651"
        fill="none"
        className="bubble-svg"
        variants={breatheVariants}
        animate="animate"
      >
        <path
          d="M742.661 312.587C750.607 414.859 715.122 494.807 652.103 551.185C589.069 607.578 498.451 640.419 396.104 648.371C293.757 656.322 199.154 637.871 128.166 591.891C57.1957 545.922 9.78888 472.414 1.84317 370.143C-14.0461 165.628 141.265 18.0274 345.896 2.12913C550.527 -13.7691 726.772 108.072 742.661 312.587Z"
          fill="white"
          stroke="#D9D9D9"
        />
      </motion.svg>
    </div>
  );
}

export default BubbleSection;