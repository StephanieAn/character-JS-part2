(async() => {

    // Fetch API :
    let fetching = await fetch(`https://character-database.becode.xyz/characters`)
    let characters = await fetching.json()  

    // Clone, use and fill of the template  
    characters.forEach(character => {
        let template = document.getElementsByTagName("template")[0];
        let target = document.getElementById("target");
        let clone = template.content.cloneNode(true);

        clone.querySelector("img").src = `data:image/png;base64,${character.image}`;
        clone.querySelector("p").innerHTML = character.shortDescription;
        clone.querySelector("h3").innerHTML = character.name;
        clone.querySelector("a").href = `./pages/single-character.html?${character.id}`;
        target.appendChild(clone)
    });

    // Switch to the Single Character page   
    let newBtn = document.getElementById('index-new-btn'); 
    newBtn.addEventListener("click", () => {
        window.location.href = `./pages/manager-character.html`;
    });


    //SEARCH BAR
    let bar = document.getElementById('search-bar');
    let i = '47'
    let searchName = characters[i].name;
    console.log(searchName)
    
    bar.addEventListener('input', () => {
        let searchstring = bar.value.toUpperCase()

        
    });
})()

    // //SEARCH BAR
    // let bar = document.getElementById('search-bar');
    // bar.addEventListener('keyup', () => {
    //     let searchstring = bar.value.toUpperCase()
    //     let carte = document.querySelectorAll('.carte')
        
    //     for (let i = 0; i < carte.length; i++)  {
    //         let h3 = carte[i].querySelector('h3');
    //         let txt =  h3.textContent || h3.innerText;

    //         if (txt.toUpperCase().indexOf(searchstring) > -1){
    //             carte[i].style.display = '';
    //         }
    //         else {
    //             carte[i].style.display = 'none';
    //         }
    //     };
    // });