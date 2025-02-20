import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="w-96 bg-white rounded-lg shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <span className="text-sm font-semibold">Login</span>
        </div>
        <div className="p-8 flex flex-col items-center">
          <div className="w-full mb-4">
            <label className="text-xs text-gray-600">Email</label>
            <input
              className="text-sm w-full h-8 rounded-md border border-gray-400 mt-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="w-full mb-4">
            <label className="text-sm text-gray-600">Password</label>
            <input
              className="text-xs w-full h-8 rounded-md border border-gray-400 mt-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="w-full">
            <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-200 hover:text-black transition">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
