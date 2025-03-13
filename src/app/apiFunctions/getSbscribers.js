import { axiosInstance } from "../axios/axios";
import { getCookies } from "../action";
const getSbscribers = async (user) => {
    const refreshToken = await getCookies();
    try {
        const response = await axiosInstance.get(`/${user}/getSubscribers`, {
            headers: {
                "wedoraCredentials": refreshToken,
            },
        });
        console.log(response.data);
        
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export  {getSbscribers}