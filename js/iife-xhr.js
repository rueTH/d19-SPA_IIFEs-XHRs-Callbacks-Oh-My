function showCarnivores (carnivores) {
  carnivores = carnivores.join('<br>');
  outputC.innerHTML = `<p>Carnivores:<br>${carnivores}</p>`
}

function showHerbivores (herbivores) {
  herbivores = herbivores.join('<br>');
  outputH.innerHTML += `<p>Herbivores:<br>${herbivores}</p>`
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);