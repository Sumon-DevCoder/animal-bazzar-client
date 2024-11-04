"use client";

import { signIn } from "next-auth/react";
import React from "react";

const LoginSocialBtn = () => {
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000" })
        }
      >
        Sign in With google
      </button>
      <button
        className="btn btn-secondary"
        onClick={() =>
          signIn("github", { callbackUrl: "http://localhost:3000" })
        }
      >
        Sign in With github
      </button>
    </>
  );
};

export default LoginSocialBtn;
