const input = document.querySelector("input");
const button = document.querySelector("button");
const resultados = document.querySelector(".resultados-pesquisa");

button.addEventListener("click", () => {
    resultados.innerHTML = "";
    const value = input.value;
    alert(value);
});
