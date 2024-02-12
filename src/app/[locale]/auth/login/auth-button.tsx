"use client";

import { Button } from "@/components/ui/button";
import { firebaseAuth } from "@/lib/firebase/firebase";
import { OAuthProvider, signInWithPopup } from "firebase/auth";

interface AuthButton {}

export function AuthButton({}: AuthButton) {
  function handleClick() {
    signInWithPopup(firebaseAuth, new OAuthProvider("oidc.discord"));
  }
  return <Button onClick={handleClick}>Entrar com o Discord</Button>;
}
