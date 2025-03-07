let a = true

function textett(){
    if(a){
        document.getElementById("text1").style.display = "block"
        document.getElementById("text2").style.display = "none"
        a = false
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
    }
    else{
        document.getElementById("text2").style.display = "none"
       
        b = true
    
    }
}