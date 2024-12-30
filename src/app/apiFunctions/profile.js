export const profie = async () =>{
    try {
        await fetch(`${process.env.backend_api}/user/profile`,{})
    } catch (error) {
        
    }
}