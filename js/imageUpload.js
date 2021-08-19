// uplaod another/new picture for the character
let image = "";
let imageUploaded = () => {
    let file = document.querySelector("input[type=file]")[`files`][0];
    let reader = new FileReader();
    
    reader.onload = () => {
        image = reader.result.replace("data:", "").replace(/^.+,/,"");
        document.getElementById("importid").src =  `data:image/jpeg;base64,${image}`;
    }
    reader.readAsDataURL(file);
};
