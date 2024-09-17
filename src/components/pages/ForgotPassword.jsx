import { Button } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-toastify";

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

const ForgotPassword = () => {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    setEmailError(!isEmailValid);

    if (isEmailValid) {
      setClicked(true);
      const params = {
        Username: email,
      };
      toast.success("Please check your email.");
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
      <div className="flex flex-col items-center justify-center w-[90%] md:w-[50%] lg:w-[50%] xl:w-[30%] py-10 px-16 bg-whiteColor dark:bg-blackColor rounded-2xl">
        <h1 className="text-2xl font-bold mb-1 text-neutralMedium text-center lg:text-left">
          Set Password
        </h1>
        <p className="text-sm text-[#808191] mb-6">
          Restore access to your account
        </p>
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
              } placeholder:text-[#A3A1A7] text-[#A3A1A7] my-2 rounded-lg w-full py-2 px-4 outline-none`}
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

          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="rounded-full font-semibold !mt-8 !mb-4 !bg-blueColor hover:!bg-blueColor !capitalize"
            disabled={clicked}
          >
            {clicked ? "Loading..." : "Reset Password"}
          </Button>
        </form>
        <div className="flex items-center justify-center">
          <a className="font-semibold text-blueColor" href="/login">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
