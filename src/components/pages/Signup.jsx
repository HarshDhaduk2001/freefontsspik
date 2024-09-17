import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
const validatePassword = (password) => password.trim().length >= 6;
const validateFullName = (name) => name.trim().length > 2;

const Signup = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [fullName, setFullName] = useState("");
  const [fullNameError, setFullNameError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isFullNameValid = validateFullName(fullName);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = password === confirmPassword;

    setEmailError(!isEmailValid);
    setFullNameError(!isFullNameValid);
    setPasswordError(!isPasswordValid);
    setConfirmPasswordError(!isConfirmPasswordValid);

    if (
      isEmailValid &&
      isFullNameValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      setClicked(true);
      const params = {
        FullName: fullName,
        Username: email,
        Password: password,
      };
      toast.success("You are successfully Registered.");
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
    <div className="flex items-center justify-center h-screen bg-[#F2F2F2] dark:bg-[#16181E]">
      <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[30%] py-8 px-16 bg-whiteColor dark:bg-blackColor rounded-2xl">
        <h1 className="text-2xl font-bold mb-1 text-neutralMedium text-center lg:text-left">
          Start for free👋
        </h1>
        <p className="text-sm text-[#808191] mb-6">Access to all features</p>
        <form onSubmit={handleSubmit} className="w-full">
          {/* Full Name Field */}
          <div>
            <label
              htmlFor="fullName"
              className={`font-semibold ${fullNameError ? "text-red-500" : ""}`}
            >
              Full Name *
            </label>
            <input
              type="text"
              className={`border ${
                fullNameError ? "border-red-500" : "border-[#F2F2F2]"
              } placeholder:text-[#A3A1A7] text-[#333] my-2 rounded-lg w-full py-2 px-4 outline-none`}
              placeholder="Enter Your Full Name"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setFullNameError(false);
              }}
              onBlur={() => setFullNameError(!validateFullName(fullName))}
            />
            {fullNameError && (
              <p className="text-sm text-red-500 -mt-2">
                Full name is required.
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="mt-1">
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
              } placeholder:text-[#A3A1A7] text-[#333] my-2 rounded-lg w-full py-2 px-4 outline-none`}
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              onBlur={() => setEmailError(!validateEmail(email))}
            />
            {emailError && (
              <p className="text-sm text-red-500 -mt-2">
                Please enter a valid email.
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-1 relative">
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
              } placeholder:text-[#A3A1A7] text-[#333] my-2 rounded-lg w-full py-2 px-4 outline-none`}
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
            {passwordError && (
              <p className="text-sm text-red-500 -mt-2">
                Password must be at least 6 characters long.
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mt-1 relative">
            <label
              htmlFor="confirmPassword"
              className={`font-semibold ${
                confirmPasswordError ? "text-red-500" : ""
              }`}
            >
              Confirm Password *
            </label>
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              className={`border ${
                confirmPasswordError ? "border-red-500" : "border-[#F2F2F2]"
              } placeholder:text-[#A3A1A7] text-[#333] my-2 rounded-lg w-full py-2 px-4 outline-none`}
              placeholder="Confirm Your Password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordError(false);
              }}
              onBlur={() =>
                setConfirmPasswordError(password !== confirmPassword)
              }
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="absolute top-10 right-4 cursor-pointer text-[#A3A1A7]"
            >
              {confirmPasswordVisible ? <VisibilityOff /> : <Visibility />}
            </span>
            {confirmPasswordError && (
              <p className="text-sm text-red-500 -mt-2">
                Passwords do not match.
              </p>
            )}
          </div>

          <div className="flex items-center justify-end">
            <a href="/forgot-password" className="text-blueColor">
              Forgot your password?
            </a>
          </div>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="rounded-full font-semibold !mt-6 !mb-3 !bg-blueColor hover:!bg-blueColor !capitalize"
            disabled={clicked}
          >
            {clicked ? "Loading..." : "Sign Up"}
          </Button>
        </form>

        <div className="flex items-center justify-center">
          Already have an account?&nbsp;
          <a className="underline font-bold text-blueColor" href="/login">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
