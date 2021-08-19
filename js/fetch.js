(async() => {

    // Fetch API :
    let fetching = await fetch(`https://character-database.becode.xyz/characters`)
    let characters = await fetching.json()  
    
    //Get the ID of the character we want to change
    let queryString = location.search.substring(1)
    let find = characters.find(el => el.id === queryString)
    
})()