let addButton = document.querySelector("#add");
let input = document.querySelector(".inputs input");
let task = document.querySelector(".tasks");
let error = document.querySelector(".error");
let errorDeleteIcon = document.querySelector(".error i");

addButton.addEventListener("click", () => {
  if (input.value == "") {
    error.style.display = "block";
    errorDeleteIcon.addEventListener("click", () => {
      error.style.display = "none";
    });
    error.style.display = "block";
  } else {
    let createElement = document.createElement("ul");
    createElement.innerHTML = `${input.value} <i class="fa-solid fa-trash"></i>`;
    task.appendChild(createElement);
    input.value = "";
    error.style.display = "none";

    createElement.querySelector("i").addEventListener("click", () => {
      createElement.remove();
    });
  }
});
