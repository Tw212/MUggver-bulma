let a = true

function Meny(){
    if(a){
        document.getElementById("menypa").style.display = "block"
        document.getElementById("bild").style.display = "none"
        a = false
    }
    else{
        document.getElementById("menypa").style.display = "none"
        document.getElementById("bild").style.display = "block"
        a = true
    
    }
}
