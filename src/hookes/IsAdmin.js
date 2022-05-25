import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "./firebase.init";

const IsAdmin = () => {
    const [authUser] = useAuthState(auth);
    const [admin, setAdmin] = useState(false);

    const email = authUser?.email;
    const url = `http://localhost:5000/user?email=${email}`;

    const { isLoading, error, data: user } = useQuery('adminOrUser', () => fetch(url).then(res => res.json()))

    if (isLoading) return <p>Loading... Please wait...</p>
    if (error) return 'An error has occurred: ' + error.message;

    /* const admin = user?.role; */
    if (user?.role === 'admin') {
        setAdmin(true)
    }
    return [admin];
}
export default IsAdmin;
