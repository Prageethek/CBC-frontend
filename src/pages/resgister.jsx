import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  async function handleRegister() {
    const user = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    };
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/users/",
        user,
      );

      toast.success(response.data.message);

      navigate("/login/");
    } catch (e) {
      console.log(response);
      toast.error(e.response.data.message);
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
              type="text"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <input
              className="border-red-800 w-[300px] h-[60px] bg-amber-300/40 rounded-4xl font-bold px-4 focus:outline-none"
              type="text"
              placeholder="Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <input
              className="border-red-800 w-[300px] h-[60px] bg-amber-300/40 rounded-4xl font-bold px-4 focus:outline-none"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button
              className="bg-amber-400 rounded-4xl w-[180px] h-[50px] font-bold  text-white cursor-pointer mt-4"
              onClick={handleRegister}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
