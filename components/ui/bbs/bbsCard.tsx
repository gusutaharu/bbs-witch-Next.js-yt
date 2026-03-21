import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BBSDataType } from "@/lib/difinition";
import Link from "next/link";

interface BBSDataProps {
  bbsData: BBSDataType
}

export const BBSCard = ({bbsData} : BBSDataProps) => {
  const { id, title, content, username } = bbsData;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>
          {content}
        </p>
      </CardContent>
      <CardFooter>
        <Link href={`/bbs-posts/${id}`} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};
