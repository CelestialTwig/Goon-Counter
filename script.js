document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    const badgesSideBar = document.querySelector(".sidebar ul");
    const customAlert = document.querySelector('.custom-alert');
    const confirmBtn = document.getElementById('confirmation')
    const sidebarButton = document.querySelector('.sidebarButton');
    const goonPoints = document.querySelector(".goonPoints");
    let score = parseInt(localStorage.getItem("score")) || 0;


    if (!localStorage.getItem('gPoints')) {
        localStorage.setItem('gPoints', '0');
    }


    incrementButton.addEventListener("click", () => {
        score = parseInt(localStorage.getItem('score'))
        score += 1;
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
            currentPoints += 1;
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






});

