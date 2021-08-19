(async() => {

    // Fetch API :
    let fetching = await fetch(`https://character-database.becode.xyz/characters`)
    let characters = await fetching.json()  
    
})()