import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    // const createUser = () => {
    //   Betty({ email, password });
    // };
  
    const request =  await fetch('http://localhost:5000/login',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: password }),
    });

    const response  = await request.json();
    localStorage.setItem("token", response.token);

    response && 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "login successful",
        showConfirmButton: false,
        timer: 1500
      })
      navigate('/dashboard')
       
  };

  return (
    <div className="max-w-sm bg-gradient-to-b from-white to-[#f4f7fb] rounded-3xl p-6 border-5 border-white shadow-lg mx-4">
      <div className="text-center font-bold text-2xl text-[#1089d3]">Sign In</div>
      <form onSubmit={handleSubmit} className="mt-5">
        <input 
          required 
          className="w-full bg-white border-0 p-4 rounded-2xl mt-4 shadow-md" 
          type="email" 
          name="email" 
          id="email" 
          placeholder="E-mail" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          required 
          className="w-full bg-white border-0 p-4 rounded-2xl mt-4 shadow-md" 
          type="password" 
          name="password" 
          id="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <span className="block mt-2 ml-2">
          <a href="#" className="text-xs text-[#0099ff] decoration-none">Forgot Password ?</a>
        </span>
        <input 
          className="block w-full font-bold bg-gradient-to-r from-[#1089d3] to-[#12b1d1] text-white py-3 px-6 rounded-2xl shadow-lg mt-5 transition-all duration-200 ease-in-out" 
          type="submit" 
          value="Sign In" 
        />
      </form>
      <div className="mt-6">
        <span className="text-center text-xs text-gray-500">Or Sign in with</span>
        <div className="flex justify-center gap-4 mt-2">
          <button className="bg-gradient-to-r from-black to-[#707070] border-2 border-white p-2 rounded-full w-10 aspect-square flex justify-center items-center shadow-md transition-all duration-200 ease-in-out">
            <svg className="fill-white" xmlns="(link unavailable)" height="1em" viewBox="0 0 488 512">
            
            </svg>
          </button>
          <button className="bg-gradient-to-r from-black to-[#707070] border-2 border-white p-2 rounded-full w-10 aspect-square flex justify-center items-center shadow-md transition-all duration-200 ease-in-out">
            <svg className="fill-white" xmlns="(link unavailable)" height="1em" viewBox="0 0 384 512">
              
            </svg>
          </button>
          <button className="bg-gradient-to-r from-black to-[#707070] border-2 border-white p-2 rounded-full w-10 aspect-square flex justify-center items-center shadow-md transition-all duration-200 ease-in-out">
            <svg className="fill-white" xmlns="(link unavailable)" height="1em" viewBox="0 0 512 512">
              
            </svg>
          </button>
        </div>
      </div>
      <span className="text-center mt-4">
        <a href="#" className="text-xs text-[#0099ff] decoration-none">Learn user licence agreement</a>
      </span>
    </div>
  );
};

export default Login;


