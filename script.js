let a = true
function Meny(){
    if(a = true){
        document.getElementById("menypa").style.display = "block"
        document.getElementById("min-header").style.display = "none"
        document.getElementById("info").style.display = "none"
        a = false
    }
    if(a = false){
        document.getElementById("menypa").style.display = "none"
        document.getElementById("min-header").style.display = "block"
        document.getElementById("info").style.display = "block"
        a = true
    }
}