let a = true

function Meny(){
    if(a){
        document.getElementById("menypa").style.display = "block"
        a = false
    }
    else{
        document.getElementById("menypa").style.display = "none"
        a = true
    
    }
}