const filmList = document.getElementById("element-7");
const kyivText = document.querySelector(".element-8");

function toggleColors(element) {
    const active = element.dataset.active === "true";
    element.style.backgroundColor = active ? "" : "#176b87";
    element.style.color = active ? "" : "#ffffff";
    element.dataset.active = String(!active);
}

filmList.addEventListener("click", () => toggleColors(filmList));
kyivText.addEventListener("click", () => toggleColors(kyivText));

const imageLink = document.querySelector(".image-link");
const initialWidth = 600;

document.getElementById("add-image").addEventListener("click", () => {
    if (!document.getElementById("city-image")) {
        const newImage = document.createElement("img");
        newImage.id = "city-image";
        newImage.src = "../lab1/image.jpg";
        newImage.alt = "Фото міста Київ";
        newImage.width = initialWidth;
        imageLink.append(newImage);
    }
});

document.getElementById("increase-image").addEventListener("click", () => {
    const currentImage = document.getElementById("city-image");
    if (currentImage) currentImage.width = Math.min(currentImage.width + 50, 1000);
});

document.getElementById("decrease-image").addEventListener("click", () => {
    const currentImage = document.getElementById("city-image");
    if (currentImage) currentImage.width = Math.max(currentImage.width - 50, 100);
});

document.getElementById("remove-image").addEventListener("click", () => {
    document.getElementById("city-image")?.remove();
});
