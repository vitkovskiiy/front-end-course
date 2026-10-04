
const validators = {
    name: /^[А-ЯІЇЄҐа-яіїєґ'’-]{6,}\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/u,
    birthdate: /^\d{2}\.\d{2}\.\d{4}$/,
    address: /^м\.\s\d{6}$/u,
    email: /^[A-Za-z0-9._%+-]{6,}@[A-Za-z0-9-]{5,}\.com$/,
    telegram: /^@[A-Za-z0-9]_[A-Za-z0-9]{5,}$/
};

const form = document.getElementById("student-form");
const formStatus = document.getElementById("form-status");
const errorMessages = {
    name: "Введіть прізвище (від 6 літер) та два ініціали у форматі Т.Т.",
    birthdate: "Введіть існуючу дату у форматі ДД.ММ.РРРР.",
    address: "Введіть адресу у форматі «м. » і шість цифр.",
    email: "Введіть e-mail: щонайменше 6 символів@5 символів.com.",
    telegram: "Введіть @, один символ, підкреслення та щонайменше 5 символів."
};

function isValidDate(value) {
    if (!validators.birthdate.test(value)) return false;
    const [day, month, year] = value.split(".").map(Number);
    const date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function validateField(name) {
    const input = form.elements[name];
    const field = input.closest(".field");
    const valid = name === "birthdate"
        ? isValidDate(input.value.trim())
        : validators[name].test(input.value.trim());

    field.classList.toggle("invalid", !valid);
    input.setAttribute("aria-invalid", String(!valid));
    field.querySelector(".error").textContent = valid ? "" : errorMessages[name];
    return valid;
}

Object.keys(validators).forEach((name) => {
    form.elements[name].addEventListener("input", () => {
        validateField(name);
        formStatus.textContent = "";
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const valid = Object.keys(validators).map(validateField).every(Boolean);

    if (!valid) {
        formStatus.textContent = "Перевірте поля, позначені червоною рамкою.";
        form.querySelector(".field.invalid input")?.focus();
        return;
    }

    const resultWindow = window.open("", "student-data", "width=520,height=520");
    if (!resultWindow) {
        formStatus.textContent = "Дозвольте відкриття спливаючих вікон і надішліть форму ще раз.";
        return;
    }

    const values = [
        ["ПІБ", form.elements.name.value.trim()],
        ["Дата народження", form.elements.birthdate.value.trim()],
        ["Адреса", form.elements.address.value.trim()],
        ["E-mail", form.elements.email.value.trim()],
        ["Telegram", form.elements.telegram.value.trim()]
    ];
    resultWindow.document.title = "Дані студента";
    resultWindow.document.body.style.cssText = "font: 16px Segoe UI, Arial, sans-serif; padding: 24px; color: #202b38";
    const heading = resultWindow.document.createElement("h1");
    heading.textContent = "Введені дані";
    resultWindow.document.body.append(heading);
    const list = resultWindow.document.createElement("dl");
    values.forEach(([label, value]) => {
        const term = resultWindow.document.createElement("dt");
        const description = resultWindow.document.createElement("dd");
        term.textContent = label;
        description.textContent = value;
        list.append(term, description);
    });
    resultWindow.document.body.append(list);
    resultWindow.focus();
    formStatus.textContent = "Дані перевірено. Результат відкрито в окремому вікні.";
});

const tableBody = document.querySelector("#number-table tbody");
for (let row = 0; row < 6; row += 1) {
    const tableRow = document.createElement("tr");
    for (let column = 0; column < 6; column += 1) {
        const number = row * 6 + column + 1;
        const cell = document.createElement("td");
        cell.textContent = number;
        cell.dataset.number = number;
        if (number === 6) {
            cell.id = "target-cell";
            cell.classList.add("target-cell");
            cell.setAttribute("aria-label", "Клітинка №6 — активна");
        }
        tableRow.append(cell);
    }
    tableBody.append(tableRow);
}

const targetCell = document.getElementById("target-cell");
const colorPicker = document.getElementById("cell-color");
const tableStatus = document.getElementById("table-status");

function randomColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, "0")}`;
}


targetCell.addEventListener("mouseover", () => {
    targetCell.style.backgroundColor = randomColor();
    tableStatus.textContent = "Клітинка №6 отримала випадковий колір.";
});


targetCell.addEventListener("click", () => {
    targetCell.style.backgroundColor = colorPicker.value;
    tableStatus.textContent = `Для клітинки №6 вибрано колір ${colorPicker.value}.`;
});


targetCell.addEventListener("dblclick", () => {
    const cells = tableBody.querySelectorAll("td");
    const anchorIndex = 5;
    const anchorRow = Math.floor(anchorIndex / 6);
    const anchorColumn = anchorIndex % 6;
    const height = 3;
    const width = 3;
    const firstColumn = anchorColumn - width + 1;
    const color = colorPicker.value;

    for (let row = anchorRow; row < anchorRow + height && row < 6; row += 1) {
        for (let column = firstColumn; column <= anchorColumn; column += 1) {
            cells[row * 6 + column].style.backgroundColor = color;
        }
    }
    tableStatus.textContent = `Зафарбовано прямокутник 3×3 кольором ${color}.`;
});
