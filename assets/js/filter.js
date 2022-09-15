const search = () => {
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".templates");
    const productName = document.getElementsByClassName("temp-name");
    for(let i=0; i<productName.length; i++){
        let match = product[i].getElementsByClassName("temp-name")[0];
        if(match){
         let textValue = match.textContent || match.innerHTML;
         if(textValue.toUpperCase().indexOf(searchBox) > -1){
            product[i].style.display = "";
         }else {
            product[i].style.display = "none";
         }
        }
    }
}
let mainText = document.getElementById("main-text");
setTimeout(()=> {
mainText.innerHTML = "We provide with the best video tutorials and examinable questions";
}, 3000);
