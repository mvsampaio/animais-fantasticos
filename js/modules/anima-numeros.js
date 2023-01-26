export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;

      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }

  let oberser;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      oberser.disconnect();
      animaNumeros();
    }
  }

  oberser = new MutationObserver(handleMutation);
  const observerTarget = document.querySelector(".numeros");

  oberser.observe(observerTarget, { attributes: true });
}
