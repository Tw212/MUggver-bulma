let a = true

function Meny(){
    if(a){
        document.getElementById("menypa").style.display = "block"
        document.getElementById("min-header").style.display = "none"
        document.getElementById("info").style.display = "none"

        a = false
    }
    else{
        document.getElementById("menypa").style.display = "none"
        document.getElementById("min-header").style.display = "block"
        document.getElementById("info").style.display = "block"
        
 
        a = true
    
    }
}

function Dark(){
    let html = document.getElementsByTagName("html")
    document.getElementById("moon").style.display = "none"
    html[0].classList.toggle('theme-dark')
    document.getElementById("sun").style.display = "block"
  
}
function Light(){
    let html = document.getElementsByTagName("html")
    html[0].classList.toggle('theme-dark')
    document.getElementById("moon").style.display = "block"
    document.getElementById("sun").style.display = "none"
}