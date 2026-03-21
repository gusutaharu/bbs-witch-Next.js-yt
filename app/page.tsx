import { BBSDataType } from "@/lib/difinition";
import { BBSCardList } from "../components/ui/bbs/bbsCardList";

async function getBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });
  const bbsAllData: BBSDataType[] = await response.json();
  return bbsAllData;
}

export default async function Home() {
  const bbsAllData = await getBBSAllData();
  return (
    <main className="grid lg:grid-cols-3 px-4 py-4 gap-4">
      <BBSCardList bbsAllData={bbsAllData} />
    </main>
  );
}
