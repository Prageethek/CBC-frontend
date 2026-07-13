import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/users/login",
        user,
      );
      // console.log(response.data);
      toast.success("Login successful")
      
    } catch (e) {
      toast.error(e.response.data.message);
      // console.log(e.response.data.message);
    }
  }

  return (
    <div className="flex  h-screen bg-[url('./loginPage1.jpg')] bg-no-repeat bg-cover">
      <div className="w-[50%] h-full"></div>
      <div className=" flex w-[50%] h-full justify-center items-center ">
        <div className=" h-[400px] w-[400px] backdrop-blur-md   shadow-2xl rounded-2xl">
          <div className=" flex flex-col m-[20px] w-[360px] h-[360px] border-amber-100 justify-center items-center gap-[10px]">
            <h1 className=" text-3xl mb-4 font-extrabold ">Welcome Back!</h1>

            <input
              className=" w-[300px] h-[60px] bg-amber-300/40 rounded-4xl font-bold flex items-center justify-center px-4 focus:outline-none"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="border-red-800 w-[300px] h-[60px] bg-amber-300/40 rounded-4xl font-bold px-4 focus:outline-none"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <input
              className="border-red-800 w-[300px] h-[60px] bg-amber-300/40 rounded-4xl font-bold px-4 focus:outline-none"
              type="text"
              placeholder="password"
            />

            <button
              className="bg-amber-400 rounded-4xl w-[180px] h-[50px] font-bold  text-white cursor-pointer mt-4"
              onClick={handleLogin}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 1.40 have to implememnt onChange event in input fields
