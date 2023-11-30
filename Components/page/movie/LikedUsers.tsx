import Image from "next/image";
import Link from "next/link";
// import { Avatar, Tooltip } from "@nextui-org/react";

const renderTooltip = (props: any) => (
  <div id="button-tooltip" {...props}>
    {props.username} {props.email}
  </div>
);

export const genderDefaultAvater = (gender: string | null) => {
  if (gender === "male") {
    return "https://www.w3schools.com/howto/img_avatar.png";
  } else {
    return "https://www.w3schools.com/howto/img_avatar2.png";
  }
};

type LikedUsersProps = typeof movieAPI.data.liked_users;
export function LikedUsers({ liked_users }: { liked_users: LikedUsersProps }) {
  //   console.log("liked_users :>> ", liked_users);
  return (
    <div className="flex flex-wrap ">
      {liked_users[0]
        ? liked_users.map(
            (user, index) =>
              // <Tooltip
              //   key={index}
              //   showArrow={true}
              //   content={
              //     <div className="flex flex-col items-center justify-center text-black">
              //       <div>{user.username}</div>
              //     </div>
              //   }
              // >
              //   <Link href={`/user/${user.email}`}>
              //     <Avatar isBordered src={genderDefaultAvater(user.gender)} />
              //   </Link>
              // </Tooltip>
              "d"
          )
        : "No one liked this movie yet"}
    </div>
  );
}
