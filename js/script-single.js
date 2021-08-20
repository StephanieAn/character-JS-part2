import {fetchChar} from './fetch.js'
import {btnDel} from './btnDelete.js'

(async () => {
     
    document.addEventListener('DOMContentLoaded',async () => {
        //fetch the API
        let characters = await fetchChar();

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
        btnDel();
    });
   
})();


    