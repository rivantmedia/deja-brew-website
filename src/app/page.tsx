"use client"
import Navbar from "./_components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { David_Libre } from "next/font/google";
import ExperienceSection from "./_components/section/experience_section";
import ReviewSection from "./_components/section/review_section";
import WhySection from "./_components/section/why_section";
import JourneySection from "./_components/section/journey_section";
import BubbleSection from "./_components/section/bubble_section";
import Footer from "./_components/Footer";

// Setup David Libre font
const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function Home() {
  useEffect(() => {
    // If there's a hash in the URL, remove it and reload the page from the top
    if (window.location.hash) {
      window.history.replaceState({}, document.title, window.location.pathname);
      window.scrollTo(0, 0);
    }
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const cloudLeft = document.querySelector(".cloudleft");
      const cloudRight = document.querySelector(".cloudright");

      const isMobile = window.innerWidth < 768;
      const multiplier = isMobile ? 0.3 : 0.8;

      if (cloudLeft && cloudRight) {
        (cloudLeft as HTMLElement).style.transform = `translateX(-${scrollTop * multiplier}px)`;
        (cloudRight as HTMLElement).style.transform = `translateX(${scrollTop * multiplier}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <main className="bg-[url('/public/light-coffee-pattern.png')] bg-repeat bg-[length:150px]">
      <Navbar />
        <section id="home" className="font-dela pt-36 mt-6">
          {/* Desktop Hero Section */}
          <div className="hero">
            <Image
              src="/public/hero-image.png"
              height={252}
              width={330}
              className="heroimage"
              alt="Hero coffee image"
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

          {/* Mobile Hero Section */}
          <div className="heromobile">
            <Image
              src="/public/hero-image-mobile.png"
              height={280}
              width={345}
              className="heroimagemobile"
              alt="Hero coffee image for mobile"
            />
            <h1 className="herotagline">
              <span>
                <span className="coffee">COFFEE</span> THAT
              </span>
              <span>
                SPEAKS OF <span className="home">HOME</span>
              </span>
            </h1>
          </div>

          {/* Down Arrow */}
          <div className="arrowcontainer">
            <Link className="arrowlink" href="#journey">
              <svg
                className="arrows"
                width="92"
                height="91"
                viewBox="0 0 92 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Down Arrow">
                  <path
                    id="upper_arrow"
                    d="M45.6504 38.8784L46 39.2203L46.3496 38.8784L61.3409 24.215C62.6136 22.9702 64.6484 22.973 65.9177 24.2212C67.2197 25.5018 67.2197 27.6008 65.9177 28.8814L46 48.4698L26.0823 28.8814C24.7803 27.6008 24.7803 25.5018 26.0823 24.2212C27.3516 22.973 29.3864 22.9702 30.659 24.215L45.6504 38.8784Z"
                    fill="#D9D9D9"
                    stroke="#A38C77"
                    className="upperarrow"
                  />
                  <path
                    id="lower_arrow"
                    d="M45.6504 61.4981L46 61.8401L46.3496 61.4981L61.3409 46.8348C62.6136 45.59 64.6484 45.5927 65.9177 46.841C67.2197 48.1215 67.2197 50.2206 65.9177 51.5011L46 71.0896L26.0823 51.5011C24.7803 50.2206 24.7803 48.1215 26.0823 46.841C27.3516 45.5927 29.3864 45.59 30.659 46.8348L45.6504 61.4981Z"
                    fill="#D9D9D9"
                    stroke="#A38C77"
                  />
                </g>
              </svg>
            </Link>
          </div>

          <div className="clouds flex justify-between items-center">
            <Image
              src="/public/left-cloud.png"
              width={400}
              height={100}
              alt="Decorative cloud on the left"
              className="cloudleft"
            />
            <Image
              src="/public/right-cloud.png"
              width={400}
              height={100}
              alt="Decorative cloud on the right"
              className="cloudright"
            />
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
              style={{ textAlign: "center", marginBottom: 150, fontSize: 24 }}
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