import { Card, CardBody } from "@nextui-org/react";

type BasicInformationProps = {
  username: string | null;
  gender: string | null;
  birthday: string | null;
  email: string | null;
};
export default function BasicInformation({
  username,
  gender,
  birthday,
  email,
}: BasicInformationProps) {
  return (
    <Card>
      <CardBody>
        <div>Username: {username}</div>
        <div>Gender:{gender}</div>
        <div>Birthday:{birthday}</div>
        <div>Email:{email}</div>
      </CardBody>
    </Card>
  );
}
