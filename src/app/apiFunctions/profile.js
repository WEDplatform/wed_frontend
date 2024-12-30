export const profie = async () =>{
    try {
        await fetch(`${process.env.backend_api}/cmd/profile`,{})
    } catch (error) {
        
    }
}