import { Avatar, Card, CardBody } from "@nextui-org/react";
import { genderDefaultAvater } from "../movie/LikedUsers";

type AvatarProps = {
  avatar: string | null;
  gender: string | null;
};

export default function MyAvatar({ avatar, gender }: AvatarProps) {
  if (!avatar) {
    avatar = genderDefaultAvater(gender);
  }

  return (
    <Card>
      <CardBody className="flex flex-col items-center justify-center">
        <Avatar src={avatar} />
        <p className="text-muted">Hey there!</p>
      </CardBody>
    </Card>
  );
}
