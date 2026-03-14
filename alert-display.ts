const alertButton = document.getElementById("alertButton") as HTMLButtonElement;
const alertDisplay = document.getElementById("alertDisplay") as HTMLParagraphElement;

alertButton.addEventListener("click", (event: MouseEvent) => {
    alertDisplay.textContent = "Red Alert!";
});
