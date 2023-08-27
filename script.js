// script.js

const input = document.getElementById("input");
const ul = document.getElementById("ul");

function addItem() {
    const itemText = input.value.trim();

    if (itemText !== "") {
        const li = document.createElement("li");
        li.classList.add("list-item");

        const itemContent = document.createElement("span");
        itemContent.classList.add("list-item-text");
        itemContent.textContent = itemText;

        const trashButton = document.createElement("button");
        trashButton.classList.add("trash-button");
        trashButton.innerHTML = "&#128465;";
        trashButton.addEventListener("click", () => {
            ul.removeChild(li);
        });

        li.appendChild(itemContent);
        li.appendChild(trashButton);

        ul.appendChild(li);
        input.value = "";
    }
}

document.getElementById("enter").addEventListener("click", addItem);
