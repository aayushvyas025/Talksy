import { AuthForm, AuthHeader, FormNavigation } from "@/components";
import AuthImagePattern from "@/components/AuthImagePattern/AuthImagePattern";
import Layout from "@/Layout/Layout";
import React, { Suspense, useState } from "react";

function Auth() {
  const [formState, setFormState] = useState("signup");

  function updateFormState() {
    setFormState((prevState) => (prevState === "signup" ? "login" : "signup"));
  }

  return (
    <Suspense>
      <Layout>
        <div className="min-h-screen grid lg:grid-cols-2 ">
          {/* Auth Form */}
          <div className="flex flex-col justify-center items-center p:6 sm:p-12">
            <div className="w-full max-w-md space-y-8">
              <AuthHeader formState={formState} />
              <AuthForm
                formState={formState}
                updateFormState={updateFormState}
              />
              <FormNavigation
                formState={formState}
                updateFormState={updateFormState}
              />
            </div>
          </div>
          {/* UI Design */}
          <AuthImagePattern
            title="Join our Community"
            subtitle="Connect with friends, share moments, and stay in touch with your loved ones"
          />
        </div>
      </Layout>
    </Suspense>
  );
}

export default Auth;
