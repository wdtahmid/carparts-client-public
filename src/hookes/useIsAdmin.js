import axios from "axios";
import { useState } from "react";

const useIsAdmin = (email) => {
    const [admin, setAdmin] = useState(true);


    async function getAdmin() {
        try {
            await axios.get(`https://cryptic-plateau-83425.herokuapp.com/getadmin?email=${email}`);
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
