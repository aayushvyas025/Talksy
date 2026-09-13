import React from "react";
import Button from "../Button/Button";
import useAuthStore from "@/store/auth/authStore";

function DeleteAccount() {
  const { isUserDeleted, userAccountDelete } = useAuthStore();
  return (
    <div className="flex items-center justify-between py-2">
      <span>Delete Account</span>
      <Button
        style={"text-red-300 hover:text-red-600"}
        onClick={userAccountDelete}
        disabled={isUserDeleted}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteAccount;
