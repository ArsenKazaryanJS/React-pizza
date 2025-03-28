
export const fetchPizzasAPI  = async ()=>{
    try {
        const response = await fetch('https://65999411652b843dea52f53a.mockapi.io/pizza')
        return await response.json()
    } catch (error) {
         console.log(error);
         
    }
}