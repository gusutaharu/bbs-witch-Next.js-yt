import { BBSDataType } from "@/lib/difinition";

async function getDetailData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });
  const bbsDetailData: BBSDataType = await response.json();
  return bbsDetailData;
}

const BBSDetailPage = async ({
  params,
}: {
  params: Promise<{ bbsid: number }>;
}) => {
  const { bbsid } = await params;
  const bbsDetailData = await getDetailData(bbsid);
  console.log(bbsDetailData);
  return <div>DetailPage</div>;
};

export default BBSDetailPage;
