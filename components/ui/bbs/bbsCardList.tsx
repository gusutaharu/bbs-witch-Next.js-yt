import { BBSDataType } from "@/lib/difinition";
import { BBSCard } from "./bbsCard";

interface BBSAllDataProps {
  bbsAllData: BBSDataType[];
}

export const BBSCardList = ({ bbsAllData } : BBSAllDataProps) => {
  return (
    <>
      {bbsAllData.map((bbsData: BBSDataType)=>(
        <BBSCard key={bbsData.id} bbsData={bbsData} />
      ))}
    </>
  );
};
