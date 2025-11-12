import './style.css'

const question = document.querySelector("#question");
const answers = document.querySelectorAll(".answer-btn");
const previousBtn = document.querySelector(".footer-btn:first-child");
const nextBtn = document.querySelector(".footer-btn:last-child");


const MOCKDATA = [
  {
    pregunta: "What is the capital of France",
    respuestas: ["London", "Berlin", "Paris", "Madrid"]
  },
  {
    pregunta: "What is the longest river in the world",
    respuestas: ["Amazonas", "Nilo", "Yagnsté", "Miño"]
  },
  {
    pregunta: "Who wrote Romeo and Juliet",
    respuestas: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"]
  },
  {
    pregunta: "How many planets are there in our solar system",
    respuestas: ["7", "8", "9", "10"]
  }
]

let index = 0;

question.textContent = MOCKDATA[0].pregunta;
function updateAnswers() {  
  answers.forEach((btn, i) => {
    btn.textContent = MOCKDATA[index].respuestas[i];
  });
}


function updateButtons() {
  // Si estamos en la primera pregunta, deshabilitar el botón "Previous"
  if (index === 0) {
    previousBtn.disabled = true;
  } else {
    previousBtn.disabled = false;
  }

  // Si estamos en la última pregunta, deshabilitar el botón "Next"
  if (index === MOCKDATA.length - 1) {
    nextBtn.disabled = true;
  } else {
    nextBtn.disabled = false;
  }
}

// Función para manejar el clic en el botón "Previous"
previousBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    question.textContent = MOCKDATA[index].pregunta;
    updateButtons();
    updateAnswers();
  }
});

// Función para manejar el clic en el botón "Next"
nextBtn.addEventListener("click", () => {
  if (index < MOCKDATA.length - 1) {
    index++;
    question.textContent = MOCKDATA[index].pregunta;
    updateButtons();
    updateAnswers();
  }
});

// Actualizamos los botones al cargar
updateButtons();
