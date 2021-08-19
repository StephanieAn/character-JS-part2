(async() => { 

    // Count of charcater for the Name 
    let name = document.getElementById("manager__name");
    let valueName = name.length;
    let CounterName = document.getElementById("counter__name");
    name.addEventListener("input", () => {
        CounterName.innerText = `${valueName} on max 20 char.`;
        console.log(`${valueName} on max 350 char`)
    });

    // Count of charcater for the Preface 
    let preface = document.getElementById("manager__preface");
    let valuePreface = preface.value;
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
    
})()