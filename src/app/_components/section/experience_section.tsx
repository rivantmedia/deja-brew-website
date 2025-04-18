import { type FC } from "react";
import InfoCard from "../InfoCard";
import InfoLine from "../InfoLine";

const ExperienceSection: FC = () => {
  return (
    <div className="mt-36 mb-36 flex flex-col items-center">
      <span className="text-center font-dela text-[var(--dark-brown)]
        text-2xl sm:text-3xl md:text-6xl lg:text-5xl
        mb-8 sm:mb-12 md:mb-16">
        The Deja Brew experience
      </span>
      
      <InfoCard title="Exceptional Beans">
        Our journey starts at the source. We meticulously select beans from the world&apos;s finest coffee-growing regions, ensuring that each batch meets our exacting standards for flavor, quality, and sustainability.
      </InfoCard>
      
      <InfoLine />
      
      <InfoCard title="Crafted with Care">
        From roasting to brewing, every step in our process is an act of devotion. Our skilled roasters carefully coax out the unique flavors of each bean, while our baristas expertly prepare your cup with precision and flair.
      </InfoCard>
      
      <InfoLine />
      
      <InfoCard title="A Taste of Tradition">
        We pay homage to coffee&apos;s rich history by incorporating traditional brewing techniques with a modern twist. Whether you prefer a classic pour-over or a velvety latte, our menu is a celebration of coffee&apos;s timeless appeal.
      </InfoCard>
    </div>
  );
};

export default ExperienceSection;
