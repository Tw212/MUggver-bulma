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
let b = true
function Dark(){
    if(b){
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
    }
    else{
        const systemSettingLight = window.matchMedia("(prefers-color-scheme: light)");
    }
}