import { AuthForm, AuthHeader, FormNavigation } from "@/components";
import React, { Suspense, useState } from "react";

function Auth() {
  const [formState, setFormState] = useState("signup");

  function updateFormState() {
    setFormState("login");
    if (formState === "login") {
      setFormState("signup");
    }
  }

  return (
    <Suspense>
      <div className="min-h-screen grid lg:grid-cols-2 ">
        {/* Auth Form */}
        <div className="flex flex-col justify-center items-center p:6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            <AuthHeader formState={formState} />
            <AuthForm formState={formState} updateFormState={updateFormState} />
            <FormNavigation
              formState={formState}
              updateFormState={updateFormState}
            />
          </div>
        </div>
        {/* UI Design */}
      </div>
    </Suspense>
  );
}

export default Auth;
