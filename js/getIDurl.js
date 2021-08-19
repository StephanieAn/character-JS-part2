(async() => {

    //Get the ID of the character we want to change
    let queryString = location.search.substring(1)
    let find = characters.find(el => el.id === queryString)
    
})()