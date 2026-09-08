import { useState } from "react";

function AuthForm({formState}) {
const [userInfo, setUserInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });
   const [showPassword, setShowPassword] = useState(false);

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

 function handleSubmit(event) {
    event.preventDefault();
  }

  return <div>AuthForm</div>;
}

export default AuthForm;
