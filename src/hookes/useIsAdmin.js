import axios from "axios";
import { useState } from "react";

const useIsAdmin = (email) => {
    const [admin, setAdmin] = useState(true);


    async function getAdmin() {
        try {
            await axios.get(`http://localhost:5000/getadmin?email=${email}`);
        } catch (error) {
            if (error.response.status === 401) {
                setAdmin(false);
            }
        }
    }
    getAdmin();

    return [admin];
}
export default useIsAdmin;
