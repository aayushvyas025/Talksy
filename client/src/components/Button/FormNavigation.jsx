import React from "react";

function FormNavigation({ formState, updateFormState }) {
  return (
    <div className="text-center">
      <p className="text-base-content/60">
        {formState === "signup" ? "Already have an account" :"Create a new account" }
        <button className="link link-primary ml-1" onClick={updateFormState}>
           {formState === "signup" ? "Login" : "Sign-up"}
        </button>
      </p>
    </div>
  );
}

export default FormNavigation;
