const screens = document.querySelectorAll('.mainscreen');
const choose_galaxy_btns = document.querySelectorAll('.choose-galaxy-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_galaxy = {}

start_btn.addEventListener('click',()=>{
  setInterval(increaseTime, 1000);
  screens[0].classList.add('hide');
})


choose_galaxy_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_galaxy = { src, alt }
        screens[1].classList.add('hide')
        setTimeout(createGalaxy, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {

    let m = Math.floor(seconds / 60)  
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
    if (seconds == 30) {
        alert("Time is hide");
        //this is to stop the time from increasing after the alert
        clearInterval(increaseTime);
        //refresh window
        window.location.reload();
    }
}

function createGalaxy() {
    const galaxy = document.createElement('div')
    galaxy.classList.add('galaxy')
    const { x, y } = getRandomLocation()
    galaxy.style.top = `${y}px`
    galaxy.style.left = `${x}px`
    galaxy.innerHTML = `<img src="${selected_galaxy.src}" alt="${selected_galaxy.alt}" style="transform: rotate(${Math.random() * 360}deg);background: transparent" />`

    galaxy.addEventListener('click', catchGalaxy)

    game_container.appendChild(galaxy)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchGalaxy() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addGalaxies()
}

function addGalaxies() {
    setTimeout(createGalaxy, 1000)
    setTimeout(createGalaxy, 1500)
}

function increaseScore() {
    score = score + 10
    scoreEl.innerHTML = `Score: ${score}`
}