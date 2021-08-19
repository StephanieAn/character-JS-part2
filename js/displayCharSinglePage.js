(async () => { 

    //display information from the character
    let nameSingle = document.getElementById("single__name");
    let prefaceSingle = document.getElementById("single__preface");
    let textSingle = document.getElementById("single__text"); 
    let imgSingle = document.querySelector("img");

    characters.forEach(character => {
        if (queryString === character.id){
            imgSingle.src = `data:image/png;base64, ${character.image}`;
            nameSingle.innerHTML = character.name;
            prefaceSingle.innerHTML = character.shortDescription;
            textSingle.innerHTML = character.description;
        }
    });
    
})()