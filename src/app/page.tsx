"use client"
import Navbar from "./_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { David_Libre } from "next/font/google";
import ExperienceSection from "./_components/section/experience_section";
import ReviewSection from "./_components/section/review_section";
import WhySection from "./_components/section/why_section";
import JourneySection from "./_components/section/journey_section";
import BubbleSection from "./_components/section/bubble_section";
import Footer from "./_components/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

// Setup David Libre font
const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  // Use state to track mobile state
  const [isMobile, setIsMobile] = useState(false);
  
  const { scrollY } = useScroll();
  const multiplier = isMobile ? 0.4 : 0.8;
  const cloudLeftX = useTransform(scrollY, [0, 1000], [0, -400 * multiplier]);
  const cloudRightX = useTransform(scrollY, [0, 1000], [0, 400 * multiplier]);
  
  useEffect(() => {
    // If there's a hash in the URL, remove it and reload the page from the top
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
      window.scrollTo(0, 0);
    }
    
    // Check if mobile on mount and on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <main className="bg-[url('/public/light-coffee-pattern.png')] bg-repeat bg-[length:150px] overflow-x-hidden">
      <Navbar />
      <section id="home" className="font-dela pt-36 mt-6 overflow-x-hidden relative w-full">
          {/* Desktop Hero Section - Keep unchanged */}
          <div className={`hero`}>
            <Image
              src="/public/hero-image.png"
              height={252}
              width={330}
              className="heroimage"
              alt="Hero coffee image"
              priority
            />
            <h1 className="herotagline">
              <span>
                <span className="coffee">COFFEE</span> THAT
              </span>
              <br />
              <span>SPEAKS OF</span>
              <br />
              <span>
                <span className="home">HOME</span>
              </span>
            </h1>
          </div>

          <div className={`heromobile`}>
            <Image
              src="/public/hero-image-mobile.png"
              height={300}
              width={300}
              className="heroimagemobile"
              alt="Hero coffee image for mobile"
              priority
              style={{ maxWidth: '80%', height: 'auto', marginTop:"-10px" }}
            />
            <h1 className="herotagline">
              <div>
                <span className="coffee">COFFEE</span>
                <span> THAT</span>
              </div>
              <div>
                <span>SPEAKS OF </span>
                <span className="home">HOME</span>
              </div>
            </h1>
          </div>

          <motion.div 
            className="arrowcontainer w-full absolute flex flex-row justify-center items-center"
            style={{
              marginTop: isMobile ? '36px' : '0',
            }}
          >
            <Link className="arrowlink z-10 cursor-pointer" href="#journey">
              <motion.svg
                className="arrows"
                width="92"
                height="91"
                viewBox="0 0 92 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ y: [0, 4, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut" 
                }}
              >
                <g id="Down Arrow">
                  <motion.path
                    id="upper_arrow"
                    d="M45.6504 38.8784L46 39.2203L46.3496 38.8784L61.3409 24.215C62.6136 22.9702 64.6484 22.973 65.9177 24.2212C67.2197 25.5018 67.2197 27.6008 65.9177 28.8814L46 48.4698L26.0823 28.8814C24.7803 27.6008 24.7803 25.5018 26.0823 24.2212C27.3516 22.973 29.3864 22.9702 30.659 24.215L45.6504 38.8784Z"
                    fill="#D9D9D9"
                    stroke="#A38C77"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 2,
                      ease: "easeInOut" 
                    }}
                  />
                  <path
                    id="lower_arrow"
                    d="M45.6504 61.4981L46 61.8401L46.3496 61.4981L61.3409 46.8348C62.6136 45.59 64.6484 45.5927 65.9177 46.841C67.2197 48.1215 67.2197 50.2206 65.9177 51.5011L46 71.0896L26.0823 51.5011C24.7803 50.2206 24.7803 48.1215 26.0823 46.841C27.3516 45.5927 29.3864 45.59 30.659 46.8348L45.6504 61.4981Z"
                    fill="#D9D9D9"
                    stroke="#A38C77"
                  />
                </g>
              </motion.svg>
            </Link>
          </motion.div>

          <div className="clouds flex justify-between items-center overflow-visible mb-32">
            {/* Left cloud */}
            <motion.div style={{ x: cloudLeftX }}>
              <Image
                src="/public/left-cloud.png"
                width={2000}
                height={1250}
                alt="Decorative cloud on the left"
                className="cloudleft"
                style={{ 
                  marginLeft: "-20%", 
                  marginTop:isMobile ? "30%" : "-10%",
                  transform: "scale(1.5)",
                }}
              />
            </motion.div>
            {/* Right cloud */}
            <motion.div style={{ x: cloudRightX }}>
              <Image
                src="/public/right-cloud.png"
                width={2000}
                height={1333}
                alt="Decorative cloud on the right"
                className="cloudright"
                style={{ 
                  marginRight: isMobile ? "-10%" : "-50%",
                  marginTop:isMobile ? "30%" : "-10%",
                  transform: "scale(1.5)",
                  position: "relative",
                  right: isMobile ? "-50px" : "-150px", 
                }}
              />
            </motion.div>
          </div>
        </section>

        {/* Fixed page content to start after navbar */}
        <section className="page">
          <section id="journey" className="mx-auto max-w-screen-xl px-4">
            <JourneySection />
            <hr className="dashedline mt-32" />
            
            <WhySection />
            <hr className="dashedline" />
            
            <ExperienceSection /> 
            
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <BubbleSection />
            </div>
            
            <ReviewSection /> 
            
            <p
              className={david.className}
              style={{ 
                textAlign: "center", 
                marginBottom: 150, 
                fontSize: isMobile ? 20 : 24,
                padding: isMobile ? "0 8px" : 0
              }}
            >
              Share your feedback with us by mentioning{" "}
              <span style={{ margin: 0, color: "#009DED" }}>@DejaBrewCafe</span>{" "}
              on X (formerly Twitter)
            </p>
          </section>
        </section>
        <Footer />
      </main>
    </>
  );
}