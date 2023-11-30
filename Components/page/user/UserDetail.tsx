import { useRadio } from "@nextui-org/react";
import Avatar from "./Avater";
import BasicInformation from "./BasicInfomation";
import LikedList from "./LikedLists";
import LikedMovies from "./LikedMovies";
import OwnedList from "./OwnedLists";

type UserDetailProps = { data: UserAPI };

export default function UserDetail({ data }: UserDetailProps) {
  const user = data.data;
  return (
    <div className="dark mx-10 flex  gap-2">
      <div>
        <Avatar gender={user.gender} avatar={user.avatar} />
        <BasicInformation
          username={user.username}
          gender={user.gender}
          birthday={user.birthday}
          email={user.email}
        />
      </div>
      <div className="flex flex-col gap-2">
        <LikedList lists={user.likedLists} />
        <OwnedList lists={user.lists} />
        <LikedMovies movies={user.likedMovies} />
      </div>
    </div>
  );
}
