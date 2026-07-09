import { Link } from "react-router-dom";
import UserData from "./userData";
import "./header.css";

export default function Header() {
  return (
    <div className=" flex flex-col bg-amber-400">
      <Link to="/" className=" w-[70px] h-[20px] bg-gray-500">
        {" "}
        Home
      </Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">SignUp</Link>
    </div>
  );
}
