import { TiTick } from "react-icons/ti";
import { ConsultationPlan } from "../types";

interface ConsultationCardProps {
  plan: ConsultationPlan;
}

export default function ConsultationCard({ plan }: ConsultationCardProps) {
  const getCardBgColor = () => {
    switch (plan.bgColor) {
      case "light-green":
        return "bg-[#AED141] text-[#1F1C1E]";
      case "Primary-green":
        return "bg-primary text-white";
      default:
        return "bg-white";
    }
  };

  return (
    <div
      className={`bg-white border-2 border-[#AED141] shadow-lg flex flex-col h-fit rounded-2xl`}
    >
      <div className="flex-1">
        <div className={`${getCardBgColor()} p-6 rounded-t-2xl`}>
          <h3 className={`text-2xl mb-3`}>{plan.title}</h3>
          <p className={`text-xl mb-4`}>{plan.description}</p>
        </div>
        <div className="p-6">
          <div className="mb-6">
            {plan.originalPrice && (
              <span className={`text-[31px] line-through mr-2 text-[#625B5F]`}>
                ${plan.originalPrice}
              </span>
            )}
            <span className={`text-[39px] text-[#1F1C1E] gooper`}>
              {typeof plan.currentPrice === "string"
                ? plan.currentPrice
                : `$${plan.currentPrice}`}
            </span>
          </div>
          <p className="mb-6 text-xl text-[#625B5F]">{plan.subtitle}</p>
          <ul className="space-y-2 mb-6">
            {plan.features.map((feature, index) => (
              <li key={index} className={`text-sm flex items-start text-black`}>
                <span className="mr-2 text-[#AED141] text-2xl">
                  <TiTick />
                </span>
                <span className="text-xl">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={`w-full py-[18px] mt-6 mb-2 px-4 rounded-md text-xl transition-colors duration-200 bg-primary text-white`}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
