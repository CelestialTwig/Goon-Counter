document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    const badgesSideBar = document.querySelector(".sidebar ul");
    const customAlert = document.querySelector('.custom-alert');
    const confirmBtn = document.getElementById('confirmation')
    const sidebarButton = document.querySelector('.sidebarButton');
    const goonPoints = document.querySelector(".goonPoints");
    let score = parseInt(localStorage.getItem("score")) || 0;
    const shopButton = document.querySelector(".shButton");
    const cirnoShop = document.querySelector(".cirnoShop");
    const cirnoSpin = document.querySelector(".cirnoSpin");
    const fundAlert = document.querySelector(".noFunds");
    const alrBoughtAlert = document.querySelector(".alreadyBought");
    const fundConfirm = document.getElementById("fund-confirmation");
    const alrBoughtConfirmation = document.getElementById("alrBought-confirmation");
    const multiButton = document.querySelector(".multiButton");
    let scoreIncrease = 1;
    let goonMultiplier = localStorage.getItem("goonMultiplier") || 1;
    let multiplierUsed = localStorage.getItem("multiplier-used") === "true";


    if (multiplierUsed) {
        goonMultiplier = 2;
    }

    if (!localStorage.getItem('gPoints')) {
        localStorage.setItem('gPoints', '0');
    }




    incrementButton.addEventListener("click", () => {
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

        let currentPoints = parseInt(localStorage.getItem("gPoints")) || 0;


        if (score !== 0 && score % 31 === 0) {
            currentPoints += 1 * parseInt(goonMultiplier);
            localStorage.setItem("gPoints", currentPoints.toString());
        }

        goonPoints.textContent = "Gooning Points: " + localStorage.getItem("gPoints");

    });

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
        }

        else if (multiplierUsed) {
            alrBoughtAlert.style.display = "flex";
        }

        else {
            fundAlert.style.display = "flex";
        }

        
    })

    alrBoughtConfirmation.addEventListener('click', function(){
        alrBoughtAlert.style.display = 'none';
    })

});

