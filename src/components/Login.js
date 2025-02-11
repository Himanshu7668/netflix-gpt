import React, { useState } from "react";
import { Header } from "./Header";

const Login = () => {
    const [isSignForm, setIsSignInForm] = useState("true")
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignForm)
    }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignForm && <input
          type="text"
          placeholder="Full Name"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full bg-gray-800 rounded-lg"
        />
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">{isSignForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>{ isSignForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
