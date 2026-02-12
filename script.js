document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    const badgesSideBar = document.querySelector(".sidebar ul");
    const customAlert = document.querySelector('.custom-alert');
    const confirmBtn = document.getElementById('confirmation')
    const sidebarButton = document.querySelector('.sidebarButton');
    const goonPoints = document.querySelector(".goonPoints");
    const shopButton = document.querySelector(".shButton");
    const cirnoShop = document.querySelector(".cirnoShop");
    const cirnoSpin = document.querySelector(".cirnoSpin");
    const fundAlert = document.querySelector(".noFunds");
    const alrBoughtAlert = document.querySelector(".alreadyBought");
    const fundConfirm = document.getElementById("fund-confirmation");
    const alrBoughtConfirmation = document.getElementById("alrBought-confirmation");
    const multiButton = document.querySelector(".multiButton");
    const autoButton = document.querySelector(".autoButton");
    const resetButton = document.querySelector(".rstButton");
    const tooFast = document.querySelector(".tooFast")
    const tooFastContent = document.querySelector(".tooFast-content")
    const tooFastConfirmation = document.getElementById("tooFast-confirmation");
    let scoreIncrease = 1;
    let goonMultiplier = localStorage.getItem("goonMultiplier") || 1;
    let multiplierUsed = localStorage.getItem("multiplier-used") === "true";
    let automaterUsed = localStorage.getItem("automater-used") === "true";
    let score = parseInt(localStorage.getItem("score")) || 0;
    let warningPositionLeft = 0;
    let warningPositionTop = 0;

    if (multiplierUsed) {
        goonMultiplier = 2;
    }

    if (!localStorage.getItem('gPoints')) {
        localStorage.setItem('gPoints', '0');
    }

    let lastClickTime = 0;

    function positionRandomizer() {

        const maxVW = 70;
        const maxVH = 70;

        warningPositionLeft = Math.floor(Math.random() * maxVW);
        warningPositionTop = Math.floor(Math.random() * maxVH);
        tooFastContent.style.top = warningPositionTop + 'vh';
        tooFastContent.style.left = warningPositionLeft + 'vw';
    }

    function goon(isAuto = false){
        const MIN_INTERVAL = 20; 
        const now = Date.now();

        if (!isAuto) {
            if (now - lastClickTime < MIN_INTERVAL) {
                positionRandomizer();
                tooFast.style.display = "block";
                incrementButton.blur();
                return; 
            }
        lastClickTime = now;
    }


        score = parseInt(localStorage.getItem('score'))
        score += scoreIncrease;
        localStorage.setItem('score', score);
        countLabel.textContent = score;
         if (parseInt(localStorage.getItem('score')) >= 100 && localStorage.getItem('master-baiter-badge') !== 'true') {
            let newBadge = document.createElement('li');
            newBadge.classList.add("master-baiter-badge")
            newBadge.textContent = "MASTER BAITER";
            newBadge.setAttribute("data-tooltip", "Obtainment Method: Goon 100 times.");
            badgesSideBar.appendChild(newBadge);
            let badgeLi = document.querySelector(".master-baiter-badge");
            let img = document.createElement("img");
            img.src = "Master-Baiter-Badge.webp"
            img.alt = "Master-Baiter-Badge";
            img.classList.add("badge-icon");
            badgeLi.appendChild(img);
            customAlert.style.display = "flex";
            localStorage.setItem('master-baiter-badge', "true");
        }

         if (parseInt(localStorage.getItem('score')) >= 31 && localStorage.getItem('rookie-baiter-badge') !== 'true') {
            let rookieBadge = document.createElement('li');
            rookieBadge.classList.add("rookie-baiter-badge");
            rookieBadge.textContent = "ROOKIE BAITER";
            rookieBadge.setAttribute("data-tooltip", "Obtainment Method: Goon 31 times.");
            badgesSideBar.appendChild(rookieBadge); 
            let img = document.createElement("img");
            img.src = "patrick-get-real.png";
            img.alt = "Rookie-Baiter-Badge";
            img.classList.add("badge-icon");
            rookieBadge.appendChild(img);
            customAlert.style.display = "flex";
            localStorage.setItem('rookie-baiter-badge', "true");
        }

        

        let currentPoints = parseInt(localStorage.getItem("gPoints")) || 0;


        if (score !== 0 && score % 31 === 0) {
            currentPoints += 1 * parseInt(goonMultiplier);
            localStorage.setItem("gPoints", currentPoints.toString());
        }

        goonPoints.textContent = "Gooning Points: " + localStorage.getItem("gPoints");
    }


    incrementButton.addEventListener("click", () => goon(false));

    sidebarButton.addEventListener('click', () => {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar.style.width === '0px' || sidebar.style.width === '') {
            sidebar.style.width = '20vw';
        } else {
            sidebar.style.width = '0px';
        }
    });

    if (!localStorage.getItem('score')){
        localStorage.setItem('score', 0)
    }

    countLabel.textContent = localStorage.getItem('score');

   confirmBtn.addEventListener('click', function(){
    customAlert.style.display = 'none';
   })

    if (localStorage.getItem('master-baiter-badge') === 'true') {
        let newBadge = document.createElement('li');
            newBadge.classList.add("master-baiter-badge")
            newBadge.textContent = "MASTER BAITER";
            newBadge.setAttribute("data-tooltip", "Obtainment Method: Goon 100 times.")
            badgesSideBar.appendChild(newBadge);
            let badgeLi = document.querySelector(".master-baiter-badge");
            let img = document.createElement("img");
            img.src = "Master-Baiter-Badge.webp"
            img.alt = "Master-Baiter-Badge";
            img.classList.add("badge-icon");
            badgeLi.appendChild(img);
    }
    
    goonPoints.textContent = "Gooning Points: " + localStorage.getItem("gPoints");


    shopButton.addEventListener('click', () => {
        const shop = document.querySelector('.shopbar');
        if (shop.style.width === '0px' || shop.style.width === '') {
            shop.style.width = '20vw';
        } else {
            shop.style.width = '0px';
        }
    });


    

    cirnoShop.addEventListener("click", () => {
        let points = parseInt(goonPoints.textContent.replace(/\D/g, ""));
        if (points >= 10) {
            points -= 10;
            cirnoSpin.style.opacity = "1";
            localStorage.setItem("cirno-there", "true");
            localStorage.setItem('gPoints', points.toString());
            goonPoints.textContent = "Gooning Points: " + points;
        }

        else {
            fundAlert.style.display = "flex";
        }
    })

    if (localStorage.getItem("cirno-there", "true")) {
        cirnoSpin.style.opacity = "1";
    }


    fundConfirm.addEventListener('click', function(){
        fundAlert.style.display = 'none';
    })


    
    multiButton.addEventListener("click", () => {
        let points = parseInt(goonPoints.textContent.replace(/\D/g, ""));
        if (points >= 5 && !multiplierUsed) {
            points -= 5;
            goonMultiplier = 2;
            localStorage.setItem("multiplier-used", "true");
            localStorage.setItem('gPoints', points.toString());
            goonPoints.textContent = "Gooning Points: " + points;
            multiplierUsed = true;
        }

        else if (multiplierUsed) {
            alrBoughtAlert.style.display = "flex";
        }

        else {
            fundAlert.style.display = "flex";
        }

        
    })

    autoButton.addEventListener("click", () => {
        let points = parseInt(goonPoints.textContent.replace(/\D/g, ""));
        if (points >= 5 && !automaterUsed) {
            points -= 5;
            setInterval(() => goon(true), 500);
            localStorage.setItem('gPoints', points.toString());
            goonPoints.textContent = "Gooning Points: " + points;
            automaterUsed= true;
        }

        else if (automaterUsed) {
            alrBoughtAlert.style.display = "flex";
        }

        else {
            fundAlert.style.display = "flex";
        }
    })

    alrBoughtConfirmation.addEventListener('click', function(){
        alrBoughtAlert.style.display = 'none';
    })


    resetButton.addEventListener('click', function(){
        localStorage.clear();
        location.reload();
    })


    tooFastConfirmation.addEventListener('click', function(){
        tooFast.style.display = 'none';
    })

    if (automaterUsed) {
    setInterval(() => goon(true), 500);
    }
});

