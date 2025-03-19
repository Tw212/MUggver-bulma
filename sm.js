
       
        let Poängvärde = 0;
        
        
        /*var autoClickerEnabled = false;
        var autoClickerInterval;
        var upgradeCount = 0;
        var cookiesAchievementThreshold = 100;
        var upgradesAchievementThreshold = 5;
        var autoClickerAchievementThreshold = 1;*/

        function Tryck(){
            
            document.getElementById('Poängvärde').innerText = Poängvärde++;
            // Check and update achievements
            
        }

        /*function updateScore() {
            document.getElementById("Poängvärde").innerText = Poäng;
            Poäng++;
            poängDisplay.textContent = poäng;
            const Mugg = document.getElementById('Mugg');
        const poängDisplay = document.getElementById('Poängvärde');
        
        }*/

        /*function updateClickValue() {
            document.getElementById("clickValue").innerText = "Click Value: " + clickValue;
            checkAchievements();
        }*/

        /*function updateAchievement(achievementId, message) {
            document.getElementById(achievementId).innerText = message;
        }*/

        /*function buyUpgrade(cost, increase){
            if (score >= cost) {
                score -= cost;
                clickValue += increase;
                upgradeCount++;
                updateScore();
                updateClickValue();

             checkAchievements();
            }
        }*/

        /*function buyAutoClicker(cost, initialSpeed) {
            if (score >= cost && !autoClickerEnabled) {
                score -= cost;
                autoClickerEnabled = true;
                document.getElementById("autoClickerStatus").innerText = "Auto-Clicker: On";
                autoClickerInterval = setInterval(autoClick, 1000 / initialSpeed);
                
                // Check and update achievements
                checkAchievements();
            } else if (autoClickerEnabled) {
                alert("Auto-Clicker is already enabled!");
            } else {
                alert("Not enough cookies to buy the Auto-Clicker!");
            }
        }*/

       /* function buyUpgradeAutoClicker(cost, speedIncrease) {
            if (score >= cost && autoClickerEnabled) {
                score -= cost;
                clearInterval(autoClickerInterval);
                autoClickerInterval = setInterval(autoClick, 1000 / (1 + speedIncrease));
                
                // Check and update achievements
                checkAchievements();
            } else {
                alert("Either Auto-Clicker is not enabled, or not enough cookies to buy this upgrade!");
            }
        }*/

        /*function autoClick() {
            score += clickValue;
            updateScore();
        }*/

        /*function checkAchievements() {
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
        }*/
    