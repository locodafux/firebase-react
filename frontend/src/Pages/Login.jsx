import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
    return (
        <>
       <div className="container">
            <div className="card">
                <div className="header">
                    <span>Login</span>
                </div>
                <div className="content">   
                    <div className="input-group">
                        <span className="label">Email</span>
                        <input className="text-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                <div className="input-group">
                        <span className="label">Password</span>
                        <input className="text-input" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" required />
                    </div>
                
                <div className="input-group">
                    <button className="primary-button">Login</button>
                </div>

                </div>
                    

            </div>
        </div> 
        <style>
            {css}
        </style>
        </>
    );
}
const css = `
    .container {
        height: 100vh;
        width: 100vw;
        background-color: #f8f8f8;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .card {
        width: 450px;
        border-radius: .5rem;
        background-color: #ffffff;
    }

    .header {
        padding: .5rem;
        border-bottom: 1px solid #f1f1f1;
        }
    .content {
        padding: 2rem;
        display: flex;
        flex-direction: column;
        align-items:center;
    }

    .text-input {
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        border: 1px solid gray;
        margin-top: 6px;
        padding: 0 4px;
    }

    .input-group {
        width:100%;
        margin-bottom: 8px;
    }
    
    .label {
        font-size: 12px;
    }
    
    .primary-button {
        background-color: #0a0a0a;
        padding: 8px 16px;
        color: #ffffff;
        border: none;
        border-radius: 5px;
    }
    .primary-button:hover {
        background-color: #f1f1f1;
        color: #0a0a0a;
    }

`
export default Login