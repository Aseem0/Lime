import { Button } from "@/components/ui/button.jsx";
import { Card, CardHeader } from "@/components/ui/card.jsx";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="w-full h-screen bg-login-img bg-cover flex justify-center items-center">
      <Card className="w-1/4 rounded-2xl">
        <CardHeader className="mt-2 text-5xl font-Reddit font-extrabold">
          WELCOME
        </CardHeader>
        <div className="text-lg ml-7 pr-12">
          <input
            type="email"
            id="email"
            className="w-full my-3 border-b-2 border-black outline-none"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="w-full my-7 border-b-2 border-black outline-none"
            placeholder="Password"
          />
        </div>
        <Button className="w-40 bg-black rounded-full m-auto text-lg flex justify-center items-center">
          LOGIN
        </Button>
        <Link to={"/signup"} className="text-base text-stone-400 ml-24">
          <Button className="a">Dont have a account? SignUp</Button>
        </Link>
      </Card>
    </section>
  );
};
export default Login;
