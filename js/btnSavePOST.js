(async() => {  
    
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
                window.location.href ="/index.html"
            }
            else{
                alert(`This character isn't add to the DB`)
            }
        }); 
    };

})()