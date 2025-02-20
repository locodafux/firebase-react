import { useState } from "react";
import Input from "../../components/Input";
import InputLabel from "../../components/InputLabel"; 
import { PrimaryButton }  from "../../components/Button";
import Header from "../../components/Header";
import axios from "axios";

function Login() {
  function handleLogin(e) {
    e.preventDefault();
    console.log('Logged in ', email)
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen w-screen bg-gray-100 flex justify-center items-center">
      <div className="w-96 bg-white rounded-lg shadow-lg">
          <Header title = "Login" />
          <form className="p-8 flex flex-col items-center" onSubmit={handleLogin}>
            <div className="w-full mb-4">
              <InputLabel text="Email" />
              <Input value = { email } setValue = {setEmail} type={"email"}/>
            </div>

            <div className="w-full mb-4">
              <InputLabel text="Password" />
              <Input value = { password } setValue = {setPassword} type={"password"} />
            </div>

            <div className="w-full">
              <PrimaryButton text = "Login" />  
          </div>
          </form>

      </div>
    </div>
  );
}

export default Login;
