const downloadButton = document.getElementById("download-button");
const requestStatus = document.getElementById("request-status");
const usersContainer = document.getElementById("users");
const apiUrl = "https://randomuser.me/api/?results=5";

function createUserCard(user) {
    // Поля варіанта 6: picture, name, city, country та postcode.
    const card = document.createElement("article");
    card.className = "user-card";

    const photo = document.createElement("img");
    photo.className = "user-photo";
    photo.src = user.picture.large;
    photo.alt = `Фото користувача ${user.name.first} ${user.name.last}`;
    photo.loading = "lazy";

    const details = document.createElement("div");
    details.className = "user-details";

    const name = document.createElement("h2");
    name.textContent = `${user.name.first} ${user.name.last}`;

    const createDetail = (label, value) => {
        const paragraph = document.createElement("p");
        const title = document.createElement("strong");
        title.textContent = `${label}: `;
        paragraph.append(title, document.createTextNode(String(value ?? "—")));
        return paragraph;
    };

    const city = createDetail("Місто", user.location.city);
    const country = createDetail("Країна", user.location.country);
    const postcode = createDetail("Поштовий індекс", user.location.postcode);

    details.append(name, city, country, postcode);
    card.append(photo, details);
    return card;
}

function showMessage(message) {
    const placeholder = document.createElement("p");
    placeholder.className = "empty-state";
    placeholder.textContent = message;
    usersContainer.replaceChildren(placeholder);
}

downloadButton.addEventListener("click", () => {
    downloadButton.disabled = true;
    requestStatus.className = "";
    requestStatus.textContent = "Завантаження...";
    showMessage("Отримуємо дані користувачів...");

    // fetch() надсилає GET-запит і повертає Promise з об'єктом Response.
    fetch(apiUrl)
        .then((response) => {
            // fetch не відхиляє Promise автоматично для HTTP-помилок, тому перевіряємо response.ok.
            if (!response.ok) {
                throw new Error(`Помилка HTTP: ${response.status}`);
            }

            // response.json() читає тіло відповіді, розбирає JSON і також повертає Promise.
            return response.json();
        })
        .then((data) => {
            // API зберігає масив користувачів у властивості results.
            if (!Array.isArray(data.results) || data.results.length === 0) {
                throw new Error("API не повернуло користувачів.");
            }

            // Створюємо картки з полів JSON і додаємо їх на сторінку.
            const cards = data.results.map(createUserCard);
            usersContainer.replaceChildren(...cards);
            requestStatus.textContent = "success!";
            requestStatus.className = "success";
        })
        .catch((error) => {
            // Сюди потрапляють мережеві, HTTP та помилки обробки JSON.
            console.error("Не вдалося завантажити користувачів:", error);
            requestStatus.textContent = "Не вдалося завантажити дані. Спробуйте ще раз.";
            requestStatus.className = "error";
            showMessage("Перевірте підключення до інтернету та натисніть Download ще раз.");
        })
        .finally(() => {
            // finally виконується після успіху або помилки та знову вмикає кнопку.
            downloadButton.disabled = false;
        });
});
