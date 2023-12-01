"use client";
import { auth } from "@/Components/shared/auth/Firebase";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaKey } from "react-icons/fa";

type myInputType = {
  setText?: React.Dispatch<React.SetStateAction<string>>;
  startContent?: React.ReactNode;
  placeholder?: string;
  label?: string;
};

function MyInput({ setText, startContent, placeholder, label }: myInputType) {
  return (
    <Input
      onValueChange={setText}
      label={label}
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
        clearButton: ["text-black"],
      }}
      placeholder={placeholder}
      startContent={startContent}
    />
  );
}
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
        router.push("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(`Login Failed \n ${errorMessage}`);
      });
  };

  //   if (auth.currentUser) {
  //     redirect("/");
  //   }
  return (
    <Card className="flex flex-col gap-3 justify-center items-center bg-slate-600/30">
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
