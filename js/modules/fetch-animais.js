import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
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

  async function fetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJSON.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros(
        "[data-numero]",
        ".numeros",
        "ativo"
      );
      animaNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchAnimais("./animaisapi.json");
}
