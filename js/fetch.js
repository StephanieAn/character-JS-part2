    // Fetch API :
    export const fecthChar = async () => {
        let fetching = await fetch(`https://character-database.becode.xyz/characters`)
        let data = await fetching.json()  
        return data
    }
    // //Get the ID of the character we want to change
    // let queryString = location.search.substring(1)
    // let find = characters.find(el => el.id === queryString)
    
