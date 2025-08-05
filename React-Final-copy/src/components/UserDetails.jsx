import { useContext } from "react";
import { UserContext } from "./UserContext";

const UserDetails = () => {
    
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <p>Details</p>
        </div>
    );
};

export default UserDetails;