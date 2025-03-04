"use client";
import Interest from "@/components/Interest";
import { Interest as InterestData } from "@/utils/types";

interface InterestProps {
  interestData: InterestData[];
}

const Interests: React.FC<InterestProps> = ({ interestData }) => {
  return (
    <div className="mx-10 min-h-[50vh] w-full">
      <h2 className="text-4xl font-semibold">
        저는 배우고 성장 중인 학생 개발자에요.
      </h2>
      <p className="text-xl">이런 분야에 관심을 가지고 탐구하고 있어요.</p>
      <div className="mt-1 grid grid-flow-col justify-start gap-2">
        {interestData.map((interest, idx) => (
          <Interest interest={interest} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Interests;
