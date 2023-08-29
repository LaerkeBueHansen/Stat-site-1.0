// Vælg elementer ved id
const sizeOptions = document.querySelectorAll(".size-option");
const buyButton = document.getElementById("buy-button");

// Lyt til klik på størrelsesvalg
sizeOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Fjern "selected" klasse fra alle størrelsesvalg
    sizeOptions.forEach((opt) => {
      opt.classList.remove("selected");
    });

    // Tilføj "selected" klasse til det valgte størrelsesvalg
    option.classList.add("selected");
  });
});

// Lyt til klik på købsknap
buyButton.addEventListener("click", () => {
  // Find den valgte størrelse ved at søge efter det element med "selected" klasse
  const selectedSizeOption = document.querySelector(".size-option.selected");

  if (selectedSizeOption) {
    const selectedSize = selectedSizeOption.getAttribute("data-size");
    alert(
      `Du har valgt størrelse: ${selectedSize}. Produktet er tilføjet til din kurv.`
    );
  } else {
    alert("Vælg venligst en størrelse først.");
  }
});
