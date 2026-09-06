import React, { Suspense, useState } from "react";

function Auth() {
  const [authState, setAuthState] = useState("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [signupUser, setSignupUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  return <Suspense>Auth Page</Suspense>;
}

export default Auth;
