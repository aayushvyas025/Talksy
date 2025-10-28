import { useState } from "react";
import { MainLayout } from "../../layout";
import { useAuthStore } from "../../store";
import { helperFunctions } from "../../helper";
import { FormComponent, LogoComponent } from "../../components";

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
  }

  return (
    <MainLayout>
      <div className="grid lg:grid-cols-2">
        {/* Left Side  */}
        <div className="flex flex-cols justify-center items-center p-6 sm:p-12 ">
          <div className="w-full max-w-md space-y-8"> 
            <LogoComponent/>
            
            {/* Form */}
            <FormComponent onClicHandler={handleFormSubmit}>

            </FormComponent>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default SignupPage;
