(async() => { 

    // Switch to the Single Character page   
    let newBtn = document.getElementById('index-new-btn'); 
    newBtn.addEventListener("click", () => {
        window.location.href = `./pages/manager-character.html`;
    });
    
})()