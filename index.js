
let cards = document.querySelectorAll(".carta")

//Variables

let figuritas = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "A",
    "B",
    "C",
    "D",
    "E"
]

shuffle(figuritas)

cards.forEach (card=> {
    card.addEventListener("click",() => {
        if (![...document.querySelectorAll(".pair")].includes(card)){
            open(card)
        }
        if ([...document.querySelectorAll(".pair")].length == 10) {
            setTimeout(() => {
                document.location.reload();
            }, 2000);
        }
    })})



function open (card) { 
    if ([...document.querySelectorAll(".open")].length<2) {
        card.innerHTML= figuritas[card.id[1]]
        card.classList.add("open")
    }
    if ([...document.querySelectorAll(".open")].length==2) {
        if (soniguales()) {
            document.querySelectorAll(".open").forEach(par =>{
                par.classList.replace("open","pair")
                par.classList.remove("carta")
                par.innerHTML= ""
            })
        }
        else {
            timeout ()
        }
    }
}


function close (card){
    card.classList.remove("open")
    card.innerHTML = ""
}

function soniguales() {
    let arreglo = document.querySelectorAll(".open")
    if (arreglo[0].innerHTML == arreglo[1].innerHTML) {
        return true
    }
    else{
        return false
    }
}

function timeout () {
    setTimeout(() => {
        document.querySelectorAll(".open").forEach(adios => {
            close (adios)
        })
    }, 1500)
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
}