import { PrimaryButton } from "../components/Button";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {

  const { logout } = useAuth();
    const handleLogout = () => {
        logout();
    }

    return (
        <>
            <h1>Admin dashboard</h1>
        <PrimaryButton text = "Logout" onClick = {handleLogout} />
        </>
    )
}

export default AdminDashboard