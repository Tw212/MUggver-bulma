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
    let html = document.getElementsByTageName("html")
    html[0].data.toggle('theme=dark')
    html[0].data.toggle('theme=light')
}
/*let b= true
function Dark(){
    if(b){
        data.theme = "light";
    }
    else{
        data.theme = "dark";
    }
}*/