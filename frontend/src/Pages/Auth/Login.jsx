import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Input from "../../components/Input";
import InputLabel from "../../components/InputLabel";
import { PrimaryButton } from "../../components/Button";
import Header from "../../components/Header";
import axios from "axios";

function Login() {
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      console.log(user)
      navigate(user.role === "admin" ? "/admin" : "/home", { replace: true });
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const params = { email, password };
    try {
      const response = await axios.post('',params);
      console.log(response.data.message)
    } catch (error) {
      console.log(error.message)
    } 

    // const userData = 
    //   name: "leo",
    //   role: "user", 
    // };

    // login(userData); // Save user in context
    // navigate(userData.role === "admin" ? "/admin" : "/home");
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="w-96 bg-white rounded-lg shadow-lg">
        <Header title="Login" />
        <form className="p-8 flex flex-col items-center" onSubmit={handleLogin}>
          <div className="w-full mb-4">
            <InputLabel text="Email" />
            <Input value={email} setValue={setEmail} type={"email"} />
          </div>

          <div className="w-full mb-4">
            <InputLabel text="Password" />
            <Input value={password} setValue={setPassword} type={"password"} />
          </div>

          <div className="w-full">
            <PrimaryButton text="Login" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
