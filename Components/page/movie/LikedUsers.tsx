import Image from "next/image";
import Link from "next/link";
import { Avatar, Card, CardBody, Tooltip } from "@nextui-org/react";

export const genderDefaultAvater = (gender: string | null) => {
  if (gender === "male") {
    return "https://www.w3schools.com/howto/img_avatar.png";
  } else {
    return "https://www.w3schools.com/howto/img_avatar2.png";
  }
};

type LikedUsersProps = typeof movieAPI.data.liked_users;
export function LikedUsers({ liked_users }: { liked_users: LikedUsersProps }) {
  return (
    <div className="flex flex-wrap min-h-[64px]">
      {liked_users[0] ? (
        <Card className=" w-full bg-white/10 ">
          <CardBody>
            {liked_users.map((user, index) => (
              <Tooltip
                key={index}
                showArrow={true}
                content={
                  <div className="flex flex-col items-center justify-center text-black">
                    <div>{user.username}</div>
                  </div>
                }
              >
                <Link href={`/user/${user.email}`}>
                  <Avatar isBordered src={genderDefaultAvater(user.gender)} />
                </Link>
              </Tooltip>
            ))}
          </CardBody>
        </Card>
      ) : (
        <Card className=" w-full bg-white/10 ">
          <CardBody className="text-white items-center justify-center">
            <h3>No one liked this movie yet</h3>
          </CardBody>
        </Card>
      )}
    </div>
  );
}
