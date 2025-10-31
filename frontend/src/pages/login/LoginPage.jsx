import React, { useState } from "react";
import { MainLayout } from "../../layout";
import {
  AuthImagePattern,
  Button,
  FormComponent,
  IconComponent,
  InputComponent,
  LogoComponent,
} from "../../components";
import { helperFunctions } from "../../helper";
import { useAuthStore } from "../../store";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Loader2, Lock, Mail } from "lucide-react";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { loginUser, isLoggingIn } = useAuthStore();
  const { validateLoginForm } = helperFunctions;

  function handlerShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

   const success = validateLoginForm(loginData);
    if (success === true) {
      return loginUser(loginData);
    }
  }

  return (
    <MainLayout>
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col justify-center items-center p-6 sm:p-12">
          <div className="w-full max-w-md space-y-8">
            <LogoComponent />
            <FormComponent onSubmitHandler={handleFormSubmit}>
              <InputComponent
                label={"Email"}
                type={"email"}
                placeholder={"you@example.com"}
                value={loginData.email}
                name={"email"}
                icon={Mail}
                iconSize={5}
                iconStyle={"text-base-content/40"}
                onChangeHandler={(event) =>
                  setLoginData({ ...loginData, email: event.target.value })
                }
              />
              <InputComponent
                label={"Password"}
                type={showPassword ? "text" : "password"}
                value={loginData.password}
                placeholder={"***********"}
                icon={Lock}
                iconSize={5}
                iconStyle={"text-base-content/40"}
                onChangeHandler={(event) =>
                  setLoginData({ ...loginData, password: event.target.value })
                }
                showHidePassword={
                  <Button
                    btnType="button"
                    onClickHandler={handlerShowPassword}
                    btnStyle={
                      "absolute inset-y-0 right-0 pr-3 flex items-center"
                    }
                    btnIcon={
                      showPassword ? (
                        <IconComponent
                          icon={EyeOff}
                          iconSize={5}
                          iconStyle={"text-base-content/40"}
                        />
                      ) : (
                        <IconComponent
                          icon={Eye}
                          iconSize={5}
                          iconStyle={"text-base-content"}
                        />
                      )
                    }
                  />
                }
              />
              <Button
                btnType="submit"
                btnStyle={"btn btn-primary w-full"}
                btnDisabled={isLoggingIn}
                btnText={
                  isLoggingIn ? (
                    <>
                      <IconComponent
                        icon={Loader2}
                        iconSize={5}
                        iconStyle="animate-spin"
                      />
                      Loading...
                    </>
                  ) : (
                    "Login Account"
                  )
                }
              />
            </FormComponent>
            <div className="text-center">
              <div className="text-base-content/60">
                Don't have an account ?
                <Link to="/signup" className="link link-primary">
                  Create Account{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side  */}
        <AuthImagePattern
          title="Join our community"
          subtitle="Connect with your friends, Share moments, and stay in touch with your loved ones"
        />
      </div>
    </MainLayout>
  );
}

export default LoginPage;
