import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext)

    console.log(authInfo);
    return (
        <div>
            <h1>This is Home</h1>
        </div>
    );
};

export default Home;