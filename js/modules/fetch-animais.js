import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  function createAnimal(animal) {
    /* Exemplo da div que será criada
    <div class="numero-animal">
      <h3>Lobos</h3>
      <span data-numero>4875</span>
    </div>
    */

    const div = document.createElement("div");
    const h3 = `<h3>${animal.especie}</h3>`;
    const span = `<span data-numero>${animal.total}</span>`;

    div.classList.add("numero-animal");
    div.innerHTML = h3 + span;

    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  return criarAnimais();
}
