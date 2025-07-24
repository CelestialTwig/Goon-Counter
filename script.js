document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    const badgesSideBar = document.querySelector(".sidebar ul");
    const customAlert = document.querySelector('.custom-alert');
    const confirmBtn = document.getElementById('confirmation')
    const sidebarButton = document.querySelector('.sidebarButton');


    incrementButton.addEventListener("click", () => {
        let score = parseInt(localStorage.getItem('score'))
        let newScore = score + 1;
        localStorage.setItem('score', newScore);
        countLabel.textContent = parseInt(localStorage.getItem('score'))
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
    





});

