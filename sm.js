        let a = true;
        function Meny(){
            if(a){
                document.getElementById("menypa").style.display = "block"
                document.getElementById("min-header").style.display = "none"
                document.getElementById("Muggspel").style.display = "none"

        a = false
        }

        else{
            document.getElementById("menypa").style.display = "none"
            document.getElementById("min-header").style.display = "block"
            document.getElementById("Muggspel").style.display = "block"
 
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
        
        
        var Poäng = 0;
        var Klickv = 1;
        var kostnadU = 30;
        var Öka = 2
        var autoClick = 0;
        var kostnadA = 60;
        setInterval(AutoC, 1000);
        
        function Tryck(){
            Poäng += Klickv 

            Tryckv()
            
        }
        
        function Tryckv(){
            document.getElementById("Poäng").innerHTML = Poäng  
        
        }

        function Klickvärde(){
            document.getElementById("klickvärde").innerHTML = Klickv
        }

        function Upgradera(){
            if (Poäng >= kostnadU) {
                Poäng -= kostnadU;
                Klickv = Öka * Klickv;
                kostnadU *= 2;
                Tryckv()
                Tryck()
                Klickvärde()
                
            }
        }
        

       