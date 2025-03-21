import { David_Libre } from "next/font/google";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function WhySection() {
  return (
    <div className="why-section font-dela">
      <span>Why us?</span>
      <p className={david.className}>
        At Deja Brew, our story begins with a passion for perfecting the art of
        brewing. Founded by a group of coffee enthusiasts, we set out on a
        mission to create a brand that captures the essence of nostalgia, while
        pushing the boundaries of flavor and innovation.
      </p>
    </div>
  );
}