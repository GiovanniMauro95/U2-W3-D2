const nameInput = document.getElementById("nameInput")
const savedValueDisplay = document.getElementById("savedValue")
const saveBtn = document.getElementById("saveBtn")
const removeBtn = document.getElementById("removeBtn")
const timerDisplay = document.getElementById("timer")

function loadSavedValue() {
  const savedValue = localStorage.getItem("savedName")
  if (savedValue) {
    savedValueDisplay.textContent = savedValue
  } else {
    savedValueDisplay.textContent = "Nessun valore salvato"
  }
}

saveBtn.addEventListener("click", () => {
  const name = nameInput.value.trim()
  if (name) {
    localStorage.setItem("savedName", name)
    savedValueDisplay.textContent = name
    nameInput.value = ""
  }
})

removeBtn.addEventListener("click", () => {
  localStorage.removeItem("savedName")
  savedValueDisplay.textContent = "Nessun valore salvato"
})

loadSavedValue()

let seconds = sessionStorage.getItem("counter")
  ? parseInt(sessionStorage.getItem("counter"))
  : 0
timerDisplay.textContent = seconds

setInterval(() => {
  seconds++
  sessionStorage.setItem("counter", seconds)
  timerDisplay.textContent = seconds
}, 1000)
