// -------------------funzione per applicare classe a nav (transizione da gialla a bianca)-----------------

document.addEventListener("DOMContentLoaded", function () {
  let header = document.querySelector("header");
  let navbar = document.querySelector("nav");

  window.addEventListener("scroll", function () {
    if (window.scrollY > header.clientHeight) {
      //  clientHeight è una proprietà JavaScript che restituisce l'altezza di un elemento, inclusi eventuali bordi ma escludendo il padding, lo scrollbar (se presente) e il margin dell'elemento stesso.

      // Puoi utilizzare clientHeight per ottenere l'altezza effettiva di un elemento nel DOM.
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// --------------------funzione per nascondere/mostrare casualmente le M---------------------------

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// ottengo una visibilita' casualmente, cambiando il valore decido se nascondere piu' - o - meno M
function getRandomVisibility() {
  return Math.random() < 0.2 ? "hidden" : "visible";
}

function animateSvg() {
  let paths = document.querySelectorAll("path");

  paths.forEach(function (path) {
    setTimeout(function () {
      path.style.visibility = getRandomVisibility();
    }, getRandomNumber(0, 3000)); // cambio questi valori x ottenere la velocita' dell'animazione desiderata
  });

  setTimeout(animateSvg, 3000); // cambio questi valori x ottenere la velocita' dell'animazione desiderata
}

document.addEventListener("DOMContentLoaded", function () {
  animateSvg();
});
