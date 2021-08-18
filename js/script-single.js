(async () => {
     
    document.addEventListener('DOMContentLoaded',async function(){
        //fetch the API
        const response = await fetch(`https://character-database.becode.xyz/characters`);
        const character = await response.json();

        //got the ID from the URL
        let queryString = location.search.substring(1)
        // console.log(queryString)


        //display information from the character
        character.forEach(obj => {
            if (queryString === obj.id){
                let img = document.querySelector("img");
                img.src = `data:image/png;base64, ${obj.image}`;
                document.getElementById("single__name").innerHTML = obj.name;
                document.getElementById("single__preface").innerHTML = obj.shortDescription;
                document.getElementById("single__text").innerHTML = obj.description;
            }

        });

        //update button
        document.getElementById("update").addEventListener("click", () => {
            window.location.href = `manager-character.html?${queryString}`;
        }); 

        //The delete button
        document.getElementById("delete").addEventListener("click", async () => {
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
                alert(`This character isn't delete of your API`);
            }
        }); 
    });
   
})();


    