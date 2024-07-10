let totalSeconds;

function countDown(){
    console.log(totalSeconds);
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(isNaN(choice.value)) {
        alert("Merci d'entrer un chiffre");
    } else{
        totalSeconds = choice.value * 60;
        choice.value = "";
        setInterval(countDown, 1000);
    }
})



// Créer un événement à la validation du form pour lancer le compte à rebours
