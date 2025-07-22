document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    


    incrementButton.addEventListener("click", () => {
        let score = parseInt(localStorage.getItem('score'))
        let newScore = score + 1;
        localStorage.setItem('score', newScore);
        countLabel.textContent = parseInt(localStorage.getItem('score'));
    });

    if (!localStorage.getItem('score')){
        localStorage.setItem('score', 0)
    }

    countLabel.textContent = localStorage.getItem('score');





});

