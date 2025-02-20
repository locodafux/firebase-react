import { PrimaryButton } from "../components/Button"
import { useAuth } from "../context/AuthContext";

const Home = () => {

  const { user, logout} = useAuth();

    const handleLogout = () => {
        logout();
    }

    return (
        <>
        <h1>Home</h1>
        <PrimaryButton text = "Logout" onClick = {handleLogout} />
        </>
    )
}

export default Home