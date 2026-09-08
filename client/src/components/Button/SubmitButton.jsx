import React from "react";

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
