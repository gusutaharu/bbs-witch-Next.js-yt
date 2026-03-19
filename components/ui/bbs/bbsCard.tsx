import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
export const BBSCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio
          cupiditate, vitae doloremque maiores in architecto minus non corrupti
          consequatur perspiciatis dignissimos illo dolores a quod labore
          accusantium asperiores consequuntur nisi.
        </p>
      </CardContent>
      <CardFooter>
        <Link href={"/bbs-posts/1"} className="text-blue-500">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
};
