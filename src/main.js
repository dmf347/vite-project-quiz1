import './style.css'

const question = document.querySelector("#question");
const previousBtn = document.querySelector(".footer-btn:first-child");
const nextBtn = document.querySelector(".footer-btn:last-child");

const posibleQuestions = ["What is the capital of France",
  "What is the longest river in the world",
  "Who wrote Romeo and Juliet",
  "How many planets are there in our solar system"];


let index = 0;
question.textContent = posibleQuestions[index];

function updateButtons() {
  // Si estamos en la primera pregunta, deshabilitar el botón "Previous"
  if (index === 0) {
    previousBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }

  // Si estamos en la última pregunta, deshabilitar el botón "Next"
  if (index === posibleQuestions.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Función para manejar el clic en el botón "Previous"
previousBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    question.textContent = posibleQuestions[index];
    updateButtons();
  }
});

// Función para manejar el clic en el botón "Next"
nextBtn.addEventListener("click", () => {
  if (index < posibleQuestions.length - 1) {
    index++;
    question.textContent = posibleQuestions[index];
    updateButtons();
  }
});

// Actualizamos los botones al cargar
updateButtons();
