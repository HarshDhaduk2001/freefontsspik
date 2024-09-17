import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Trophy from "../../assets/Trophy.png"

const validatePassword = (password) => password.trim().length >= 6;

const SetPassword = () => {
  const [clicked, setClicked] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState(false);
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
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid =
      password === confirmPassword && confirmPassword.trim().length > 0;

    setPasswordError(!isPasswordValid);
    setConfirmPasswordError(!isConfirmPasswordValid);

    if (isPasswordValid && isConfirmPasswordValid) {
      setClicked(true);
      const params = {
        Password: password,
      };
      toast.success("Password set successfully.");
      console.log(params);
      setClicked(false);
      setPasswordConfirm(true);

      // Uncomment and update URL when backend API is ready
      // const url = `${process.env.api_url}/auth/token`;
      // const successCallback = (ResponseData: any, error: boolean, ResponseStatus: string) => {
      //   if (ResponseStatus === "Success" && !error) {
      //     toast.success("You are successfully logged in.");
      //     localStorage.setItem("token", ResponseData.Token.Token);
      //     router.push("/");
      //   }
      //   setClicked(false);
      //   setPasswordConfirm(true)
      // };
      // callAPI(url, params, successCallback, "POST");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#F2F2F2] dark:bg-[#0A0A0A]">
      {!passwordConfirm ? (
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[30%] py-8 px-16 bg-whiteColor dark:bg-[#16181E] rounded-2xl">
          <h1 className="text-2xl font-bold mb-1 text-neutralMedium text-center lg:text-left">
            Create New Password
          </h1>
          <p className="text-sm text-[#808191] mb-6 text-center">
            Enter a new password for login your account
          </p>
          <form onSubmit={handleSubmit} className="w-full">
            {/* Password Field */}
            <div className="mt-1 relative">
              <label
                htmlFor="password"
                className={`font-semibold ${
                  passwordError ? "text-red-500" : ""
                }`}
              >
                New Password *
              </label>
              <input
                type={passwordVisible ? "text" : "password"}
                className={`border ${
                  passwordError ? "border-red-500" : "border-[#F2F2F2]"
                } !bg-transparent placeholder:text-[#A3A1A7] text-[#A3A1A7] dark:text-whiteColor mb-2 rounded-lg w-full py-2 px-4 outline-none`}
                placeholder="New Password"
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
                } !bg-transparent placeholder:text-[#A3A1A7] text-[#A3A1A7] dark:text-whiteColor mb-2 rounded-lg w-full py-2 px-4 outline-none`}
                placeholder="Confirm Password"
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

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className="rounded-full font-semibold !mt-6 !mb-3 !bg-blueColor hover:!bg-blueColor !capitalize"
              disabled={clicked}
            >
              {clicked ? "Loading..." : "Reset Password"}
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[30%] py-8 px-16 bg-whiteColor dark:bg-[#16181E] rounded-2xl">
        <img src={Trophy} alt="" />  
        <h1 className="text-xl lg:text-2xl py-2 font-bold mb-1 text-neutralMedium text-center">
            Password Change Success
          </h1>
          <p className="text-sm text-[#808191] mb-6 text-center">
            Congratulations! You have successfully changed your password for
            login
          </p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="rounded-full font-semibold !mt-6 !mb-3 !bg-blueColor hover:!bg-blueColor !capitalize"
          >
            <a href="/login">Back to Login</a>
          </Button>
        </div>
      )}
    </div>
  );
};

export default SetPassword;
