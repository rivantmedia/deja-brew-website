import React from "react";
import JourneyCard from "./journey_card";

function JourneySection() {
  const sections = [
    {
      image: "/public/image1.png",
      title: "Picture a place",
      description:
        "Rolling hills adorned with emerald green coffee bushes, basking under the golden rays of the sun. This is where our coffee journey begins - in the heart of the lush coffee fields.",
      imagemob: "/public/image1mob.png",
    },
    {
      image: "/public/image2.png",
      title: "Handpicked with care",
      description:
        "Handpicked by skilled farmers, only the ripest cherries make the cut. This careful selection ensures that every cup embodies the essence of the bean's potential.",
      imagemob: "/public/image2mob.png",
    },
    {
      image: "/public/image3.png",
      title: "With nature's touch",
      description:
        "Once harvested, the cherries embark on their transformation. Some may undergo the 'washed' process, cleansing the beans of their outer layers. Others embrace the 'natural' method, allowing the sun and air to work their magic. Each process contributes distinct nuances to the final brew.",
      imagemob: "/public/image3mob.png",
    },
    {
      image: "/public/image4.png",
      title: "Carefully crafted",
      description:
        "At our roastery, all the beans undergo a final refinement. Any lingering parchment or pulp is meticulously removed before being sent for roasting. Sorting by size and quality ensures only the best reach your cup.",
      imagemob: "/public/image4mob.png",
    },
    {
      image: "/public/image5.png",
      title: "Roasted to perfection",
      description:
        "The heart of our craft is in the roasting process. Here, green beans become aromatic, flavorful coffee you savor. Skillful roasters carefully watch over every batch, coaxing out the unique personality of each bean.",
      imagemob: "/public/image5mob.png",
    },
    {
      image: "/public/image6.png",
      title: "Ground just right",
      description:
        "Precision is key. The grind size is tailored to the brewing method, maximizing optimal flavor extraction. Whether you're brewing an espresso or a French press, our grinds are finely tuned for perfection.",
      imagemob: "/public/image6mob.png",
    },
    {
      image: "/public/image7.png",
      title: "Brewed with love",
      description:
        "In our world, brewing is an art form. We offer a symphony of methods, from classic drip to the bold elegance of espresso. Each technique creates a distinct melody of flavors, ensuring a truly personalized experience.",
      imagemob: "/public/image7.png",
    },
    {
      image: "/public/image8.png",
      title: "Served with passion",
      description:
        "Every cup is a canvas, and our baristas are the artists. From bean to cup to you, each brew is crafted with dedication, where how it's served is as important as how it tastes.",
      imagemob: "/public/image8mob.png",
    },
  ];

  return (
    <div className="journey-section font-dela">
      <div className="journey-title">
        <p className="journey-p1">A journey from our fields</p>
        <p className="journey-p2">to your refreshing sip...</p>
      </div>
      {sections.map((section, index) => (
        <JourneyCard
          key={index}
          image={section.image}
          title={section.title}
          description={section.description}
          reverse={index % 2 !== 0} 
          imagemob={section.imagemob}
        />
      ))}
    </div>
  );
}

export default JourneySection;