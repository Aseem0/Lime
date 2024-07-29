import { Button } from "@/components/ui/button.jsx";
import { Card, CardHeader } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full h-screen bg-login-img bg-cover flex justify-center items-center">
      <Card className="w-1/4 rounded-2xl">
        <CardHeader className="mt-2 text-5xl font-Reddit font-extrabold">
          WELCOME
        </CardHeader>
        <form className="text-lg ml-7 pr-12">
          <input
            type="email"
            id="email"
            className="w-full my-3 border-b-2 border-black outline-none"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="w-full my-7 border-b-2 border-black outline-none"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button className="w-40 bg-black rounded-full m-auto text-lg flex justify-center items-center">
            LOGIN
          </Button>
        </form>
        <Link
          to={"/signup"}
          className="text-base text-stone-400 ml-20 float-left my-2"
        >
          Dont have a account? SignUp
        </Link>
      </Card>
    </section>
  );
};
export default Login;
