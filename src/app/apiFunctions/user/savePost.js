const { getCookies } = require("@/app/action")
const { axiosInstance } = require("@/app/axios/axios")

const savePost=async(data)=>{
    try {
        await axiosInstance.post('/user/savePost',data,
           {
            headers: {
                "wedoraCredentials":await getCookies()
        }
           })
    } catch (error) {
        console.log(error);
        
    }
}