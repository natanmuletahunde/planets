const input1 = document.querySelector('.input1');
const input2 = document.querySelector('.input2');
const button1 = document.querySelector('.button1');

let selectedPlanet = null;

input2.addEventListener('mouseover', () => {
  const optionDiv = document.createElement('div');
  optionDiv.classList.add('optionDiv');

  const planets = [
    { name: 'Mercury', kg: 330.2, imageUrl:'mercury.image.avif'  },
    { name: 'Venus', kg: 4868.5, imageUrl: 'venuse.image.jpg' },
    { name: 'Earth', kg: 5972.0, imageUrl: 'earth.image.jpg' },
    { name: 'Mars', kg: 639.0, imageUrl: 'mars.image.jpg' },
    { name: 'Jupiter', kg: 1898600.0, imageUrl: 'jupitar.image.webp' },
    { name: 'Saturn', kg: 568340.0, imageUrl: 'saturn.image.webp' },
    { name: 'Uranus', kg: 86832.0, imageUrl: 'uranus.image.jpeg' },
    { name: 'Neptune', kg: 102430.0, imageUrl: 'neptune.jpg' },
    { name: 'Pluto', kg: 13.1, imageUrl: 'pluto.image.jpg' },
    { name: 'Ceres', kg: 939.0, imageUrl: 'ceres.image.avif' },
    { name: 'Eris', kg: 16.6, imageUrl: 'eris.image.jpg' },
    { name: 'Makemake', kg: 175.0, imageUrl: 'malkiwuye.image.jpg' }
  ];

  planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('option');
    planetDiv.textContent = planet.name;
    planetDiv.addEventListener('click', () => {
      displayPlanetInfo(planet);
      selectedPlanet = planet;
      const optionDiv = document.querySelector('.optionDiv');
      if (optionDiv) {
        optionDiv.remove();
      }
    });
    optionDiv.appendChild(planetDiv);
  });

  document.body.appendChild(optionDiv);

  document.addEventListener('click', handleClickOutside);
});

function displayPlanetInfo(planet) {
  removePlanetInfo();

  const planetInfoDiv = document.createElement('div');
  planetInfoDiv.classList.add('planetInfo');

  const planetName = document.createElement('h2');
  planetName.textContent = planet.name;

  const planetKg = document.createElement('p');
  planetKg.textContent = `Mass: ${planet.kg} kg`;

  const planetImage = document.createElement('img');
  planetImage.src = planet.imageUrl;

  planetInfoDiv.appendChild(planetName);
  planetInfoDiv.appendChild(planetKg);
  planetInfoDiv.appendChild(planetImage);

  document.body.appendChild(planetInfoDiv);
}

function removePlanetInfo() {
  const planetInfo = document.querySelector('.planetInfo');
  if (planetInfo) {
    planetInfo.remove();
  }
}

function handleClickOutside(event) {
  const optionDiv = document.querySelector('.optionDiv');
  if (optionDiv && !optionDiv.contains(event.target)) {
    optionDiv.remove();
    document.removeEventListener('click', handleClickOutside);
  }
}