let result = document.querySelector(".result-text"),
  form = document.getElementById("form"),
  min = document.querySelector("#lower"),
  max = document.querySelector("#upper");
function generateRandom(a, b) {
  return Math.floor(Math.random() * (b - a)) + parseInt(a);
}
function checkValues(a, b) {
  return parseInt(a) > parseInt(b);
}
form.addEventListener("submit", (a) => {
  a.preventDefault(),
    checkValues(min.value, max.value) && (max.value = parseInt(min.value) + 1),
    (result.style.visibility = "visible"),
    (result.innerText = generateRandom(min.value, max.value));
});
