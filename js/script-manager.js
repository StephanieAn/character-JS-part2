    // uplaod another/new picture for the character
    let image ="";
    function imageUploaded(){
        let file= document.querySelector("input[type=file]")[`files`][0];
        let reader = new FileReader();
        
        reader.onload = function(){
            image = reader.result.replace("data:", "").replace(/^.+,/,"");
            document.getElementById("importid").src =  `data:image/jpeg;base64,${image}`;
        }
        reader.readAsDataURL(file);
    }


(async() => {

    //Fetch the API
    const response = await fetch(`https://character-database.becode.xyz/characters`);
    const character = await response.json()

    //Get the ID of the character we want to change
    let queryString = location.search.substring(1)
    let find = character.find(el => el.id === queryString)

    //POST method : 
    //if we don't have an id for the character
    if (typeof find === "undefined") {
        // console.log("f")
        document.getElementById("update").addEventListener("click", async () => {
            
            let name = document.getElementById("manager__name").value
            let shortDescription = document.getElementById("manager__preface").value
            let description = document.getElementById("manager__text").children[0].innerHTML
        
            if(confirm(`Do you want to add this character?`)){
                await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json", },
                    body: JSON.stringify({
                        name,
                        description,
                        shortDescription,                   
                        image : `${image}`
                        })  
                    }) 
                alert(`Your character is added to the DB`);
                window.location.href ="/character-manager-js/index.html"
            }
            else{
                alert(`This character isn't add to the DB`)
            }
        }); 
    };

    //PUT method :
    //if we got an id for the character
    if (queryString === find.id){
        let img = document.querySelector("img");
        img.src = `data:image/png;base64, ${find.image}`;
        document.getElementById("manager__name").value = find.name;
        document.getElementById("manager__preface").value = find.shortDescription;
        document.querySelector("#manager__text").children[0].innerHTML = find.description;
        // console.log(document.querySelector("p").value)
        
        document.getElementById("update").addEventListener("click", async () => {
            let name = document.getElementById("manager__name").value
            let shortDescription = document.getElementById("manager__preface").value
            let description = document.getElementById("manager__text").children[0].innerHTML
            
            //if we don't have an image
            if (image.length ===  0){
                if(confirm(`Do you want to change this character ?`)){
                    await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json", },
                        body: JSON.stringify({
                            name,
                            description,
                            shortDescription,                   
                            image : `${find.image}`
                        })
                    });
                    alert("Your character has been modified in the DB")
                    window.location.href ="/character-manager-js/index.html"
                }  
                else{
                    alert("your character hasn't been modify!")
                }
            }

            //if we have an image
            else {
                if(confirm(`Do you want to change this character ?`)){
                    await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                        method: 'PUT',
                        headers: {
                            "Content-Type": "application/json", },
                        body: JSON.stringify({
                            name,
                            description,
                            shortDescription,                   
                            image
                        })
                    })
                    alert("Your character has been modified in the DB")
                    window.location.href ="/character-manager-js/index.html"
                }
                else {
                    alert("your character hasn't been modify!")
                }
            }      
        })
    };

    //Delete button :
    document.getElementById("delete").addEventListener("click", async () => {
        if(confirm(`Do you want to delete it ?`)){
            await fetch(`https://character-database.becode.xyz/characters/${queryString}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                },
            }); 
            alert("votre personnage a bien été supprimé")
            window.location.href ="index.html"
        }else{
            alert(`This character isn't delete of your API`);
        }
    }); 

    // Count of charcater for the Name 
    const name = document.getElementById("manager__name");
    const valueName = name.value;
    const CounterName = document.getElementById("counter__name");
    name.addEventListener("input", () => {
        CounterName.innerText = `${valueName} on max 20 char.`;
    });

    // Count of charcater for the Preface 
    const preface = document.getElementById("manager__preface");
    const valuePreface = preface.value;
    let counterPreface = document.getElementById('counter__preface');
    preface.addEventListener("input", () => {
        counterPreface.innerText = `${valuePreface} on max 70 char.`;
    });

    // Count of charcater for the Text 
    //Warning it's a <div> element
    const text = document.getElementById("manager__text");
    let textP = document.querySelector("p").childNodes[0];
    const valueText = textP.value;
    let counterText = document.getElementById("counter__text");
    text.addEventListener("input", () => {
        counterText.innerText = `${valueText} on max 350 char.`;
        console.log(`${valueText} on max 350 char`)
    });
 
})(); // End and Call of the function
