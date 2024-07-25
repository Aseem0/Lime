import { Button } from "@/components/ui/button.jsx";
import { Card, CardHeader } from "@/components/ui/card.jsx";
import React from "react";

const Login = () => {
  return (
    <section className="w-full">
      <div className="w-full h-screen bg-login-img bg-cover flex justify-center items-center">
        <Card className="w-1/4 rounded-2xl shadow-lg">
          <CardHeader className="mt-2 text-5xl font-Reddit font-extrabold">
            WELCOME
          </CardHeader>
          <div>
            <input
              type="email"
              id="email"
              className="w-3/4 ml-7 my-3 border-b-2 border-black text-xl"
              placeholder="Email"
            />
            <input
              type="password"
              id="password"
              className="w-3/4 ml-7 my-7 border-b-2 border-black text-xl"
              placeholder="Password"
            />
          </div>
          <Button className="w-40 bg-black rounded-full m-auto text-lg flex justify-center items-center">
            LOGIN
          </Button>
          <h2 className="my-6 text-base text-stone-400 ml-24">
            Dont have a account? SignUp
          </h2>
        </Card>
      </div>
    </section>
  );
};
export default Login;
