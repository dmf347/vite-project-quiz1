import './style.css'

// Creamos el contenedor principal
const app = document.querySelector("#app");
const container = document.createElement("div");
container.className = "container";
app.appendChild(container);

// Creamos el título
const title = document.createElement("h2");
title.id = "text";
title.textContent = "Quiz Question";
container.appendChild(title);

// Creamos el párrafo de la pregunta
const question = document.createElement("p");
question.id = "question";
container.appendChild(question);

// Creamos el contenedor de respuestas
const answersContainer = document.createElement("div");
answersContainer.className = "container-answers";
container.appendChild(answersContainer);

// Creamos los botones de respuesta
const answers = [];
for (let i = 0; i < 4; i++) {
  const btn = document.createElement("button");
  btn.className = "answer-btn";
  answersContainer.appendChild(btn);
  answers.push(btn);
}

// Creamos el footer con los botones Previous y Next
const footer = document.createElement("div");
footer.className = "container-footer";
container.appendChild(footer);

const previousBtn = document.createElement("button");
previousBtn.className = "footer-btn";
previousBtn.textContent = "Previous";
footer.appendChild(previousBtn);

const check = document.createElement("button");
check.className = "footer-btn";
check.textContent = "Check";
check.disabled = true;
footer.appendChild(check);

const nextBtn = document.createElement("button");
nextBtn.className = "footer-btn";
nextBtn.textContent = "Next";
footer.appendChild(nextBtn);

const greenColor = "#3CB371";
const whiteColor = "#FFFFFF";


const MOCKDATA = [
  {
    pregunta: "What is the capital of France",
    respuestas: ["London", "Berlin", "Paris", "Madrid"],
    selection: null,
    correct: "Paris"

  },
  {
    pregunta: "What is the longest river in the world",
    respuestas: ["Amazonas", "Nilo", "Yagnsté", "Miño"],
    selection: null,
    correct: "Amazonas"
  },
  {
    pregunta: "Who wrote Romeo and Juliet",
    respuestas: ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
    selection: null,
    correct: "William Shakespeare"
  },
  {
    pregunta: "How many planets are there in our solar system",
    respuestas: [7, 8, 9, 10],
    selection: null,
    correct: 8
  }
]

let index = 0;

question.textContent = MOCKDATA[0].pregunta;
updateAnswers();

function updateAnswers() {  
  answers.forEach((btn, i) => {
    btn.textContent = MOCKDATA[index].respuestas[i];
    
    btn.style.backgroundColor = whiteColor;

    if (MOCKDATA[index].selection === btn.textContent) {
      btn.style.backgroundColor = greenColor;
    }
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

const allButtons = document.querySelectorAll(".answer-btn");

allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    allButtons.forEach((b) => b.style.backgroundColor = whiteColor);

    btn.style.backgroundColor = greenColor;
    MOCKDATA[index].selection = btn.textContent;

    const allAnswered = MOCKDATA.every(q => q.selection !== null);
    check.disabled = !allAnswered;
  });
  
});

check.addEventListener("click", () => {
  let correctas = 0;
  MOCKDATA.forEach((q) => {
    if (String(q.selection) === String(q.correct)) {
      correctas++;
    }
  });
  alert(`Has respondido ${correctas} preguntas correctamente de 4.`)
});


// Actualizamos los botones al cargar
updateButtons();