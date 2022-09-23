//lance la video//
function save() {
    let iframe = document.getElementById("iframeCode").value
    window.localStorage.setItem("iframe" + (new Date()), iframe);
    window.location.reload()
};

//enregistre lien//
window.onload = function load() {
    //format tableau avec des petit tableau 
    let iframes = Object.entries({...localStorage}) ;
   //button delete
    let btnDelete = '<button class="delete" style="position:relative;left:-30px;top:-10px">X</button>'
    
    // prend les elelement est transforme en element 1 (on garde que la valeur html)
    let iframesHtml = iframes.map(iframe => iframe[1]).join(btnDelete) + btnDelete

    document.querySelector('.video-play').innerHTML = iframesHtml; 

    [...document.querySelectorAll('button.delete')].forEach((button) => {
        button.addEventListener("click", () => {
            // Code de suppression d'une iframe dans le localStorage
            const src = button.previousSibling.src
            // on filtre la deuxieme valeur du petit tableau qui est en src
            const itemsToDelete = iframes.filter(iframe => iframe[1].includes(src))
            console.log(itemsToDelete)
             // Suppression effective du localstorage (on boucle avec forEach)
            itemsToDelete.forEach(item => window.localStorage.removeItem(item[0]) )
            window.location.reload()
        })
    })
}

