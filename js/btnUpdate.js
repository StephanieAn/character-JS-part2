(async () => { 

    //update button
    let update = document.getElementById("update")
    update.addEventListener("click", () => {
        window.location.href = `manager-character.html?${queryString}`;
    }); 
    
})()