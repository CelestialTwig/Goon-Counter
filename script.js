document.addEventListener("DOMContentLoaded", () => {
    const incrementButton = document.querySelector(".gButton");
    const countLabel = document.querySelector(".actualCounter");
    let count = 0;

    incrementButton.addEventListener("click", () => {
        count++;
        countLabel.textContent = count;
    });
});