import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
const validatePassword = (password) => password.trim().length > 0;

const Login = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      setClicked(true);
      const params = {
        Username: email,
        Password: password,
      };
      toast.success("You are successfully logged in.");
      console.log(params);
      setClicked(false);

      // Uncomment and update URL when backend API is ready
      // const url = `${process.env.api_url}/auth/token`;
      // const successCallback = (ResponseData: any, error: boolean, ResponseStatus: string) => {
      //   if (ResponseStatus === "Success" && !error) {
      //     toast.success("You are successfully logged in.");
      //     localStorage.setItem("token", ResponseData.Token.Token);
      //     router.push("/");
      //   }
      //   setClicked(false);
      // };
      // callAPI(url, params, successCallback, "POST");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F2F2F2] dark:bg-[#0A0A0A]">
      <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[30%] py-10 px-16 bg-whiteColor dark:bg-[#16181E] rounded-2xl">
        <h1 className="text-2xl font-bold mb-6 text-neutralMedium text-center lg:text-left">
          Welcome Back👋
        </h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div>
            <label
              htmlFor="email"
              className={`font-semibold ${emailError ? "text-red-500" : ""}`}
            >
              Email *
            </label>
            <input
              type="text"
              className={`border ${
                emailError ? "border-red-500" : "border-[#F2F2F2]"
              } !bg-transparent placeholder:text-[#A3A1A7] text-[#A3A1A7] dark:text-whiteColor mb-2 rounded-lg w-full py-2 px-4 outline-none`}
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              onBlur={() => setEmailError(!validateEmail(email))}
            />
            {emailError ? (
              validateEmail(email) ? (
                <p className="text-sm text-red-500 -mt-2">
                  Maximum 100 characters allowed.
                </p>
              ) : email.trim().length > 0 ? (
                <p className="text-sm text-red-500 -mt-2">
                  Please enter a valid email.
                </p>
              ) : (
                <p className="text-sm text-red-500 -mt-2">
                  Email is required field.
                </p>
              )
            ) : (
              ""
            )}
          </div>
          <div className="mt-4 relative">
            <label
              htmlFor="password"
              className={`font-semibold ${passwordError ? "text-red-500" : ""}`}
            >
              Password *
            </label>
            <input
              type={passwordVisible ? "text" : "password"}
              className={`border ${
                passwordError ? "border-red-500" : "border-[#F2F2F2]"
              } !bg-transparent placeholder:text-[#A3A1A7] text-[#A3A1A7] dark:text-whiteColor mb-2 rounded-lg w-full py-2 px-4 outline-none`}
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(false);
              }}
              onBlur={() => setPasswordError(!validatePassword(password))}
            />
            <span
              onClick={togglePasswordVisibility}
              className="absolute top-10 right-4 cursor-pointer text-[#A3A1A7]"
            >
              {passwordVisible ? <VisibilityOff /> : <Visibility />}
            </span>
            {passwordError ? (
              <p className="text-sm text-red-500 -mt-2">
              Password is required field.
              </p>
            ) : (
              ""
            )}
          </div>

          <div className="flex items-center justify-end">
            <a href="/forgot-password" className="text-blueColor text-sm lg:text-md">
              Forgot your password?
            </a>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="rounded-full font-semibold !mt-8 !mb-4 !bg-blueColor hover:!bg-blueColor !capitalize"
            disabled={clicked}
          >
            {clicked ? "Loading..." : "Sign in"}
          </Button>
        </form>
        <div className="flex items-center justify-center text-sm lg:text-md">
          Dont have an account?&nbsp;
          <a className="underline font-bold text-blueColor" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
