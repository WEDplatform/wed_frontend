const { getCookies } = require("@/app/action")
const { axiosInstance } = require("@/app/axios/axios")

const savePost=async(data)=>{
    try {
        let response=await axiosInstance.post('/user/savePost',data,
           {
            headers: {
                "wedoraCredentials":await getCookies()
        }
           })
           console.log(response);
           
    } catch (error) {
        console.log(error);
        
    }
}
export {savePost}