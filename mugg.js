let a = true

function textett(){
    if(a){
        document.getElementById("text1").style.display = "block"
        document.getElementById("text2").style.display = "none"
        a = false
        b = true
    }
    else{
        document.getElementById("text1").style.display = "none"
       
        a = true
    
    }
}
let b = true
function texttvå(){
    if(b){
        document.getElementById("text1").style.display = "none"
        document.getElementById("text2").style.display = "block"
        b = false
        a = true;
    }
    else{
        document.getElementById("text2").style.display = "none"
        
       
        b = true
    
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