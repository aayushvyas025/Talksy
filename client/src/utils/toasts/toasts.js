import toast from "react-hot-toast";

export function showSuccessToast(message) {
  toast.success(message);
  return; 
}

export function showErrorToast(message) {
  toast.error(message);
  return; 
}


