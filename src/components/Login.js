import React from "react";
import Header from "./Header";
const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="logo"
        />
      </div>
      <form action="" className="p-12 relative">
        <input type="Email" placeholder="Enter Email Address" className="p-2 m-2" />
        <input type="password" placeholder="Enter password" className="p-2 m-2" />
        <button className="p-4 m-4">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
