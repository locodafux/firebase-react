import { useEffect } from "react";
import { PrimaryButton } from "../components/Button";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    useEffect(()=> {
    },[]);
    const handleLogout = () => {
        logout();
        navigate(user.role !== "admin" ?? "/unauthorized")
    }

    return (
        <>
            <h1>Admin dashboard</h1>
        <PrimaryButton text = "Logout" onClick = {handleLogout} />
        </>
    )
}

export default AdminDashboard