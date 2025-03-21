import { David_Libre } from "next/font/google";

const david = David_Libre({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

interface InfoCardProps {
  children: React.ReactNode;
  title: string;
}

function InfoCard({ children, title }: InfoCardProps) {
  return (
    <div className="info-card">
      <span className={david.className}>{title}</span>
      <p className={david.className}>{children}</p> 
    </div>
  );
}

export default InfoCard;
