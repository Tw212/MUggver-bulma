let a = true

function Meny(){
    if(a){
        document.getElementById("menypa").style.display = "block"
        document.getElementById("Kontakta").style.display = "none"
        a = false
    }
    else{
        document.getElementById("menypa").style.display = "none"
        document.getElementById("Kontakta").style.display = "block"
        a = true
    
    }
}
function dåligt(){
    alert("fuck off")
}
function bra(){
    alert("good boy")
}
