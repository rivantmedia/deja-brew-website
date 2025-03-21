import React from "react";
import Image from "next/image";
import { David_Libre } from "next/font/google";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface JourneyCardProps {
  image: string;
  title: string;
  description: string;
  reverse: boolean;
  imagemob: string;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ 
  image, 
  title, 
  description, 
  reverse, 
  imagemob 
}) => {
  return (
    <>
      <div
        className={reverse ? "journey-card journey-reverse" : "journey-card"}
        style={{
          backgroundImage:
            " linear-gradient(0deg,rgba(255, 255, 255, 1) 60%,rgba(255, 255, 255, 0.75) 65%,rgba(0, 0, 0, 0)),url(" +
            imagemob +
            ")",
        }}
      >
        <div className="journey-image-container">
          <Image src={image} alt={title} height={311} width={420} />
        </div>
        <div className="journey-textcontent">
          <h2>{title}</h2>
          <p className={david.className}>{description}</p>
        </div>
      </div>
      <Image
        className="journey-arrow"
        src="/public/journeyarrow.svg"
        alt="arrow"
        height={50}
        width={10}
      />
    </>
  );
};

export default JourneyCard;