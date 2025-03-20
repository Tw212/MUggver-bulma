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
        
        
        var Poäng = 0;
        var Klickv = 1;
        var kostnadU = 30;
        var Öka = 2
        
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

        
       /* Poängupdatering() {
            document.getElementById("Poängvärde").innerHTML = Poängvärde;
        }*/
        

        

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

        /*function buyAutoClicker(cost, initialSpeed) {
            if (score >= cost && !autoClickerEnabled) {
                score -= cost;
                autoClickerEnabled = true;
                document.getElementById("autoClickerStatus").innerText = "Auto-Clicker: On";
                autoClickerInterval = setInterval(autoClick, 1000 / initialSpeed);
                
                
                checkAchievements();
            } else if (autoClickerEnabled) {
                alert("Auto-Clicker is already enabled!");
            } else {
                alert("Not enough cookies to buy the Auto-Clicker!");
            }
        }

       function buyUpgradeAutoClicker(cost, speedIncrease) {
            if (score >= cost && autoClickerEnabled) {
                score -= cost;
                clearInterval(autoClickerInterval);
                autoClickerInterval = setInterval(autoClick, 1000 / (1 + speedIncrease));
                
                // Check and update achievements
                checkAchievements();
            } else {
                alert("Either Auto-Clicker is not enabled, or not enough cookies to buy this upgrade!");
            }
        }

        function autoClick() {
            score += clickValue;
            updateScore();
        }

        function checkAchievements() {
            // Check and update achievements based on thresholds
            if (score >= cookiesAchievementThreshold) {
                updateAchievement("achievement1", "Achievement 1: Unlocked!");
            }

            if (upgradeCount >= upgradesAchievementThreshold) {
                updateAchievement("achievement2", "Achievement 2: Unlocked!");
            }

            if (autoClickerEnabled && score >= autoClickerAchievementThreshold) {
                // Add more achievements as needed for other thresholds
            }
        }
    */