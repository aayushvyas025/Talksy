import React from "react";
import Button from "../Button/Button";
import useAuthStore from "@/store/auth/authStore";
import UserDeleteDialog from "../UserDeleteDialog/UserDeleteDailog";

function DeleteAccount({handleAlert}) {
  return (
    <div className="flex items-center justify-between py-1">
      <span>Delete Account</span>
      <Button
        style={"text-red-300 hover:text-red-600"}
        onClick={handleAlert}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteAccount;
