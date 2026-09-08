import React from "react";

function FormNavigation({ formState, updateFormState }) {
  return (
    <div className="text-center">
      <p className="text-base-content/60">
        Already have an account{" "}
        <button className="link link-primary" onClick={updateFormState}>
          {formState === "signup" ? "Sign in" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default FormNavigation;
