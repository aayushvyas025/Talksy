import { useState } from "react";
import { MainLayout } from "../../layout";
import { useAuthStore } from "../../store";
import { helperFunctions } from "../../helper";
import { Link } from "react-router-dom";
import {
  AuthImagePattern,
  Button,
  FormComponent,
  IconComponent,
  InputComponent,
  LogoComponent,
} from "../../components";
import { Eye, EyeOff, Loader2, Lock, Mail, User } from "lucide-react";

function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const { signupUser, isSigningUp } = useAuthStore();
  const { validateForm } = helperFunctions;

  function handlerShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const success = validateForm(signupData);
    if (success === true) {
      signupUser(signupData);
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
                label={"Full Name"}
                placeholder={"John Doe"}
                type={"text"}
                name={"fullname"}
                value={signupData.fullName}
                icon={User}
                iconSize={5}
                iconStyle={"text-base-content/40"}
                onChangeHandler={(event) =>
                  setSignupData({ ...signupData, fullName: event.target.value })
                }
              />
              <InputComponent
                label={"Email"}
                type={"email"}
                placeholder={"you@example.com"}
                value={signupData.email}
                name={"email"}
                icon={Mail}
                iconSize={5}
                iconStyle={"text-base-content/40"}
                onChangeHandler={(event) =>
                  setSignupData({ ...signupData, email: event.target.value })
                }
              />
              <InputComponent
                label={"Password"}
                type={showPassword ? "text" : "password"}
                value={signupData.password}
                placeholder={"***********"}
                icon={Lock}
                iconSize={5}
                iconStyle={"text-base-content/40"}
                onChangeHandler={(event) =>
                  setSignupData({ ...signupData, password: event.target.value })
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
                btnDisabled={isSigningUp}
                btnText={
                  isSigningUp ? (
                    <>
                      <IconComponent
                        icon={Loader2}
                        iconSize={5}
                        iconStyle="animate-spin"
                      />
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )
                }
              />
            </FormComponent>
            <div className="text-center">
              <div className="text-base-content/60">
                Already have an account ?
                <Link to="/login" className="link link-primary">
                  Sign in{" "}
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

export default SignupPage;
