import React from "react";
import { Card, CardHeader } from "@/components/ui/card.jsx";
import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="w-full h-screen bg-login-img bg-cover flex justify-center items-center">
      <Card className="w-1/4 rounded-s-2xl">
        <CardHeader className="mt-2 text-5xl font-Reddit font-extrabold">
          WELCOME
        </CardHeader>
        <div className="text-lg ml-7 pr-12">
          <input
            type="text"
            id="name"
            className="w-full my-4 border-b-2 border-black outline-none"
            placeholder="Full Name"
          ></input>
          <input
            type="email"
            id="email"
            className="w-full pr-10 my-5 border-b-2 border-black outline-none"
            placeholder="Email"
          ></input>
          <input
            type="password"
            id="password"
            className="w-full my-5 border-b-2 border-black outline-none"
            placeholder="Password"
          ></input>
          <input
            type="password"
            id="password"
            className="w-full my-5 border-b-2 border-black outline-none"
            placeholder="Confirm Password"
          ></input>
        </div>
        <Button className="w-40 bg-black rounded-full m-auto text-lg flex justify-center items-center">
          SIGNUP
        </Button>
        <Link to={"/"} className="text-base text-stone-400 ml-20">
          Already have an account? LogIn
        </Link>
      </Card>
    </section>
  );
};

export default Signup;
