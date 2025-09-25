let score = 0;
let currentMole = null;
let time = 1000;  // Mole'nin çıxma vaxtı (1 saniyə)
let holes = document.querySelectorAll('.hole');
let scoreDisplay = document.getElementById('score');

// Moles funksiyasını yaratmaq
function randomMole() {
    if (currentMole) {
        currentMole.classList.remove('mole');
    }
    
    let randomHole = holes[Math.floor(Math.random() * holes.length)];
    randomHole.classList.add('mole');
    currentMole = randomHole.querySelector('.mole');
    
    setTimeout(randomMole, time);
}

// Tıklama hadisəsi
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.contains(currentMole)) {
            score += 10;
            scoreDisplay.textContent = `Xal: ${score}`;
            currentMole.classList.remove('mole');
            currentMole = null;
        }
    });
});

// Mole'yi hər 1 saniyədə bir dəyişdiririk
randomMole();
