

    //The delete button
    export const btnDel = async (queryString) => {
        let deleteBtn = document.getElementById('delete');
        deleteBtn.addEventListener('click', async () => {
            if(confirm(`Do you want to delete it ?`)){
                await fetch(`https://character-database.becode.xyz/characters?${queryString}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                    },
                }); 
                alert(`This character has been deleted`)
                window.location.href ="/index.html"
            }else{
                alert(`This character isn't delete`);
            }
        }); 
    }
