import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form className="p-12 absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="Email" placeholder="Enter Email Address" className="p-4 my-2 w-full bg-gray-700" />
        <input type="password" placeholder="Enter password" className="p-4 my-2 w-full bg-gray-700" />
        
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">Sign In</button>
        <p>New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
