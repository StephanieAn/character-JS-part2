(async() =>{
    //SEARCH BAR
    let bar = document.getElementById('search-bar');
    // let i = '47'
    let searchName = characters[name];
    console.log(searchName)
     
    bar.addEventListener('input', () => {
        let searchstring = bar.value.toUpperCase()    
    });

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

})()