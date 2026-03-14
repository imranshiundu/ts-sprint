const fuelForm = document.getElementById("fuelForm") as HTMLFormElement;
const fuelInput = document.getElementById("fuelInput") as HTMLInputElement;
const message = document.getElementById("message") as HTMLParagraphElement;

fuelForm.addEventListener("submit", (event: SubmitEvent) => {
    event.preventDefault();

    const fuelValue = Number(fuelInput.value);

    if (!isNaN(fuelValue) && fuelValue >= 0 && fuelValue <= 100) {
        message.textContent = `Fuel level set to: ${fuelValue}`;
    } else {
        message.textContent = "Invalid fuel input. Please enter a number between 0 and 100.";
    }
});
