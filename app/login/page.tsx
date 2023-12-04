"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button, Card, CardBody, CardHeader } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaKey } from "react-icons/fa";
import { MyInput } from "../../Components/shared/MyInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const onClickSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (!user.emailVerified) {
          alert(`Please verify your email before signing in!`);
          auth.signOut();
        }
        router.back();
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Login Failed \n ${errorMessage}`);
      });
  };

  return (
    <Card className="mt-24 flex flex-col gap-3 justify-center items-center bg-slate-600/30">
      <CardHeader className="text-4xl font-bold text-white">Login</CardHeader>
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
        <Button onClick={onClickSignIn}>Login</Button>
      </CardBody>
    </Card>
  );
}
