import toast from "react-hot-toast";

export function success(message) {
  toast.success(message);
  return; 
}

export function error(message) {
  toast.error(message);
  return; 
}
