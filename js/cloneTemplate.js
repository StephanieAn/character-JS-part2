(async() => {

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
    
})()