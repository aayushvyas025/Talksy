import { useState } from "react";
import Input from "../Input/Input";
import { Eye, Key, Mail, User } from "lucide-react";

function AuthForm({ formState, updateFormState }) {
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
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
        type={"text"}
        value={userInfo.password}
        placeholder={"Password"}
        icon={showPassword ? Eye : Key}
        onChange={(event) =>
          setUserInfo({ ...userInfo, password: event.target.value })
        }
        onClick={() => setShowPassword(!showPassword)}
      />
    </form>
  );
}

export default AuthForm;
