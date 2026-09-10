import { useState } from "react";
import Input from "../Input/Input";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import useAuthStore from "@/store/auth/authStore";
import SubmitButton from "../Button/SubmitButton";
import { validateUserInfo } from "@/utils/validations/inputValidation";
import { showErrorToast, showSuccessToast } from "@/utils/toasts/toasts";

function AuthForm({ formState }) {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { isSigningUp, isLoggingIn, signupUser, loginUser } = useAuthStore();

  async function handleSignupUser({ fullName, email, password }) {
    const { success, message } = await signupUser({
      fullName,
      email,
      password,
    });

    if (!success) {
      showErrorToast(message);
      return;
    }

    showSuccessToast(message);
    return true;
  }

  async function handleLoginUser({ email, password }) {
    const { success, message } = await loginUser({ email, password });
    if (!success) {
      showErrorToast(message);
      return;
    }
    showSuccessToast(message);
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const { success: validInput, field } = validateUserInfo({
      formState,
      fullName: userInfo.fullName,
      email: userInfo.email,
      password: userInfo.password,
    });

    if (!validInput) {
      showErrorToast(field);
      return;
    }
    let success;
    if (formState === "signup") {
      success = await handleSignupUser({
        fullName: userInfo.fullName,
        email: userInfo.email,
        password: userInfo.password,
      });
    } else {
      success = await handleLoginUser({
        email: userInfo.email,
        password: userInfo.password,
      });
    }

    if (success) {
      setUserInfo({ fullName: "", email: "", password: "" });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formState === "signup" && (
        <Input
          type={"text"}
          value={userInfo.fullName}
          placeholder={"Full Name"}
          icon={User}
          onChange={(event) =>
            setUserInfo({ ...userInfo, fullName: event.target.value })
          }
        />
      )}
      <Input
        type={"email"}
        value={userInfo.email}
        placeholder={"Email"}
        icon={Mail}
        onChange={(event) =>
          setUserInfo({ ...userInfo, email: event.target.value })
        }
      />
      <Input
        type={showPassword ? "text" : "password"}
        value={userInfo.password}
        placeholder={"Password"}
        icon={showPassword ? Eye : EyeOff}
        onChange={(event) =>
          setUserInfo({ ...userInfo, password: event.target.value })
        }
        onClick={() => setShowPassword(!showPassword)}
      />
      <SubmitButton
        loading={formState === "signup" ? isSigningUp : isLoggingIn}
        disabled={formState === "signup" ? isSigningUp : isLoggingIn}
        text={formState === "signup" ? "Create Account" : "Login"}
      />
    </form>
  );
}

export default AuthForm;
