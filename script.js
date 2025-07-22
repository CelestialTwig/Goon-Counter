document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    const badgesSideBar = document.querySelector(".sidebar ul");
    const customAlert = document.querySelector('.custom-alert');
    const confirmBtn = document.getElementById('confirmation')


    incrementButton.addEventListener("click", () => {
        let score = parseInt(localStorage.getItem('score'))
        let newScore = score + 1;
        localStorage.setItem('score', newScore);
        countLabel.textContent = parseInt(localStorage.getItem('score'))
         if (parseInt(localStorage.getItem('score')) == 100) {
            let newBadge = document.createElement('li');
            newBadge.classList.add("master-baiter-badge")
            newBadge.textContent = "MASTER BAITER";
            badgesSideBar.appendChild(newBadge);
            let badgeLi = document.querySelector(".master-baiter-badge");
            let img = document.createElement("img");
            img.src = "Master-Baiter-Badge.webp"
            img.alt = "Master-Baiter-Badge";
            img.classList.add("badge-icon");
            badgeLi.appendChild(img);
            customAlert.style.display = "flex";
        }

    });

    if (!localStorage.getItem('score')){
        localStorage.setItem('score', 0)
    }

    countLabel.textContent = localStorage.getItem('score');

   confirmBtn.addEventListener('click', function(){
    customAlert.style.display = 'none';
   })



});

