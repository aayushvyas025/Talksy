import React from "react";
import FormLoader from "../Loader/FormLoader";

function SubmitButton({ loading, disabled, text }) {
  return (
    <button
      type="submit"
      className="btn btn-primary w-full"
      disabled={disabled}
    >
      {loading ? (
        <>
          <FormLoader /> Loading...
        </>
      ) : (
        text
      )}
    </button>
  );
}

export default SubmitButton;
