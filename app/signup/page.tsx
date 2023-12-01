"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { MyInput } from "../../Components/shared/MyInput";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function onClickSignUp() {}
  return (
    <Card className="flex flex-col gap-3 justify-center items-center bg-slate-600/30">
      <CardHeader className="text-4xl font-bold text-white">Sign Up</CardHeader>
      <CardBody className="flex flex-col items-center justify-center w-96 gap-3">
        <MyInput
          label="Email"
          startContent={<CiUser />}
          placeholder="you@example.com"
          setText={setEmail}
        />
        <MyInput
          label="Password"
          startContent={<FaKey />}
          setText={setPassword}
        />
        <Button onClick={onClickSignUp}>Sign Up</Button>
      </CardBody>
    </Card>
  );
}
