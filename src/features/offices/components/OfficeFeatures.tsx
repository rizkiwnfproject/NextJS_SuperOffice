import Image from "next/image";
import React from "react";

const FEATURES_MAP = [
  {
    label: "Global Event",
    description: "quos velit molestias nostrum",
    icon: "/assets/images/icons/home-trend-up.svg",
  },
  {
    label: "Extra Snacks",
    description: "quos velit molestias nostrum",
    icon: "/assets/images/icons/coffee.svg",
  },
  {
    label: "Sustainbility",
    description: "quos velit molestias nostrum",
    icon: "/assets/images/icons/cup.svg",
  },
];

export default function OfficeFeatures({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        const matched = FEATURES_MAP.find((f) => f.label === feature);
        if (!matched) return null;

        return (
          <div key={feature} className="flex items-center gap-4">
            <Image
              src={matched.icon}
              width={34}
              height={34}
              alt={`${matched.label} icon`}
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">
                {matched.label}
              </p>
              <p className="text-sm leading-[21px]">{matched.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
