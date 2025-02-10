let noClicks = 0;
const maxNoClicks = 4;
const minNoScale = 0.1;
let noScale = 1;
let yesScale = 1;
const gifElement = document.getElementById("raychu-gif");
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const buttonContainer = document.querySelector(".btn-container");
const yesButtonStyle = window.getComputedStyle(yesButton);
const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

const gifs = ["images/psyduck-cry.gif", "images/psyduck-cry.gif", "images/psyduck-cry.gif", "images/psyduck-cry.gif"];

const buttonMessages = ["Tem certeza??", "POR FAVOR", "Não pode fazer isso comigo!"];

noButton.addEventListener("click", () => {
  if (noClicks < maxNoClicks) {
    gifElement.src = gifs[noClicks];
  }

  noButton.textContent = buttonMessages[noClicks % buttonMessages.length];

  noButton.style.width = "auto";
  noButton.style.width = `${noButton.scrollWidth}px`;

  if (noScale > minNoScale) {
    noScale -= 0.2;
    noButton.style.transform = `scale(${noScale})`;
  }

  const baseWidth = parseFloat(yesButtonStyle.width);
  const scaledWidth = baseWidth * yesScale;

  console.log(`Scaled Width: ${scaledWidth}, Max Width: ${maxYesWidth}`);

  if (scaledWidth < maxYesWidth) {
    yesScale += 0.3;
    yesButton.style.transform = `scale(${yesScale})`;

    const rootStyles = getComputedStyle(document.documentElement);
    const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 150;

    const currentGap = parseFloat(buttonContainer.style.gap) || 20;
    const newGap = Math.sqrt(currentGap * gapScaleFactor);
    buttonContainer.style.gap = `${newGap}px`;
  }

  noClicks++;

  if (noClicks >= maxNoClicks) {
    noButton.style.display = "none";
  }
});