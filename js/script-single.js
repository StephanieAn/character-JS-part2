(async () => {
     
    document.addEventListener('DOMContentLoaded',async () => {
        //fetch the API
        let fetching = await fetch(`https://character-database.becode.xyz/characters`);
        let characters = await fetching.json();

        //got the ID from the URL
        let queryString = location.search.substring(1)
        // console.log(queryString)

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

        //update button
        let update = document.getElementById("update")
        update.addEventListener("click", () => {
            window.location.href = `manager-character.html?${queryString}`;
        }); 

        //The delete button
        let deleteBtn = document.getElementById('delete');
        deleteBtn.addEventListener('click', async () => {
            if(confirm(`Do you want to delete it ?`)){
                await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                }); 
                alert(`This character has been deleted`)
                window.location.href ="/index.html"
            }else{
                alert(`This character isn't delete`);
            }
        }); 
    });
   
})();


    