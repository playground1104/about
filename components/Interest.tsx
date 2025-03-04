"use client";
import { Interest as InterestData } from "@/utils/types";
import icons from "@/utils/icons";

interface InterestProps {
  interest: InterestData;
  onclick?: (name: string) => void;
}

const Interest: React.FC<InterestProps> = ({ interest, onclick }) => {
  return (
    <div
      className="bg-neutral-600 inline-flex w-fit justify-center items-center clickable rounded p-1 gap-0.5"
      onClick={() => onclick && onclick(interest.name)}
    >
      {icons[interest.icon || "tag"] || icons.tag}
      <p>{interest.name}</p>
    </div>
  );
};

export default Interest;
