const card = document.querySelectorAll(".carta")

function flipCard(){
    card.classList.toggle("flipCard");
}

card.addEventListener("click",flipCard);